import { Component, OnInit, Input, Injectable, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { DataSource, CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, merge, Subscription } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { map } from 'rxjs/operators';
import { Notification } from '../interfaces/notifications';


/** Flat node with expandable and level information */
export class NotificationNode {
  constructor(public title: string, public timestamp:Date, public type:string, public state=true, public level = 1, public expandable = false,
              public isLoading = false) {}
}

@Injectable({providedIn: 'root'})
export class DynamicDatabase {
  dataMap = new Map<string, Notification[]>([
    ['Match', []], ['Watchout', []], ['User connections', []]
  ]);

  rootLevelNodes: string[] = ['Match', 'Watchout', 'User connections'];

  /** Initial data from database */
  initialData(): NotificationNode[] {
    return this.rootLevelNodes.map(name => new NotificationNode(name, new Date(), name, true, 0, true));
  }

  getChildren(node: string): Notification[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}

export class DynamicDataSource implements DataSource<NotificationNode> {

  constructor(private _treeControl: FlatTreeControl<NotificationNode>,
    private _database: DynamicDatabase) {}

  dataChange = new BehaviorSubject<NotificationNode[]>([]);

  get data(): NotificationNode[] { return this.dataChange.value; }
  set data(value: NotificationNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  connect(collectionViewer: CollectionViewer): Observable<NotificationNode[]> {
    this._treeControl.expansionModel.changed.subscribe(change => {
      if ((change as SelectionChange<NotificationNode>).added ||
        (change as SelectionChange<NotificationNode>).removed) {
        this.handleTreeControl(change as SelectionChange<NotificationNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  disconnect(collectionViewer: CollectionViewer): void {}

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<NotificationNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }

  /** Add an item to to-do list */
  insertItem(notification: Notification) {
    let node = new NotificationNode(notification.title, <Date>notification.timestamp, notification.type)
    this.dataChange.next(this.data);
  }

  updateItem(node: NotificationNode, notification: Notification) {
    node.state = notification.state;
    node.type = notification.type
    node.title = notification.title
    this.dataChange.next(this.data);
  }
  updateItemState(node: NotificationNode, state: boolean) {
    node.state = state;
    this.dataChange.next(this.data);
  }
  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: NotificationNode, expand: boolean) {
    const children = this._database.getChildren(node.title);
    const index = this.data.indexOf(node);
    if (!children || index < 0) { // If no children, or cannot find the node, no op
      return;
    }

    node.isLoading = true;

    setTimeout(() => {
      if (expand) {
        const nodes = children.map(notification =>
          new NotificationNode(notification.title, <Date>notification.timestamp, notification.type, node.state, node.level + 1, this._database.isExpandable(notification.title)));
        this.data.splice(index + 1, 0, ...nodes);
      }
      else {
        let count = 0;
        for (let i = index + 1; i < this.data.length
          && this.data[i].level > node.level; i++, count++) {}
        this.data.splice(index + 1, count);
      }

      // notify the change
      this.dataChange.next(this.data);
      node.isLoading = false;
    }, 1500);
  }
}



@Component({
  selector: 'notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements AfterViewInit {
  @Output() countUpdate = new EventEmitter()
  constructor(public database: DynamicDatabase, private  _socketService:SocketService) {
    this.treeControl = new FlatTreeControl<NotificationNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);
    this.dataSource.data = database.initialData();
  }

  ngAfterViewInit(){
    this._socketService.onNotification().subscribe(res => {
      if(['wanted', 'match'].includes(res.type.toString().toLowerCase())){
        //Make a sound
      }

      //Add node to notifications
      let arr = this.database.dataMap.get(res.type.toString())
      arr.push(res)
      this.database.dataMap.set(res.type.toString(), arr)
      this.refreshListCounts()
    })

  }

  refreshListCounts(){
    let keys = Array.from( this.database.dataMap.keys() );
    let total_notifications = 0
    for(let k of keys){
      total_notifications += this.database.dataMap.get(k).filter(x => x.state == true).length
    }
    this.countUpdate.emit(total_notifications)
  }

  markAsRead(node: NotificationNode){
    this.dataSource.updateItemState(node!, false);
    this.refreshListCounts()
  }

  addNewItem(node: NotificationNode) {
    const parentNode = this.database.dataMap.get(node.type);
    this.dataSource.insertItem(node);
    this.treeControl.expand(node);
  }
  saveNode(node: NotificationNode) {
    const nestedNode = this.database.dataMap.get(node.type);
    console.log(nestedNode)
    this.dataSource.updateItem(node!, new Notification('Title', 'User connection'));
  }

  treeControl: FlatTreeControl<NotificationNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: NotificationNode) => node.level;

  isExpandable = (node: NotificationNode) => node.expandable;

  hasChild = (_: number, _nodeData: NotificationNode) => _nodeData.expandable;

}
