import { Component, OnInit, Input } from '@angular/core';
import { stretch, staggeredDevelop, developDown } from '../app-animations';

@Component({
  selector: 'post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.css'],
  animations:[stretch, developDown]
})
export class PostFilterComponent implements OnInit {
  filters;
  enabledFilters = [];
  show_filter_switches = false;
  constructor() { }

  ngOnInit(): void {
  }
  doSatisfy(post){

    if(!this.enabledFilters){
      return true;
    }
    var badges = post.badges;
    let global_truth_val = true;
    for(let badge in badges){
      let category = badges[badge].category;
      let value = badges[badge].name;
      let truth = this.enabledFilters[category]
      let truth_val = false;
      if(!truth || truth.length <= 0){
        continue;
      }
      for(let tv in truth){
        truth_val = truth_val || (value === truth[tv]);
      }
      global_truth_val = global_truth_val && truth_val
    }

    return global_truth_val;
  }
  private transformFilters() : any {
    let arr = [];
    for (let key in this.filters) {
      arr.push({category: key, badges: this.filters[key]});
    }
    this.filters = arr;
  }
  protected setFilter(event){
    var target = event.target;
    while(target.tagName !== "BADGE"){
      target = target.parentNode;
    }
    var activate = target.getAttribute('activate');
    var name = target.getAttribute('name');
    var category = target.getAttribute('category');

    if(activate === 'true'){
      if(!this.enabledFilters[category]){
        this.enabledFilters[category] = [name];
      }
      else{
        this.enabledFilters[category].push(name);
      }
    }
    else{
      this.enabledFilters[category] = this.enabledFilters[category].filter(e => e !== name);
      if(this.enabledFilters[category].length == 0)
      {
        //this.enabledFilters = this.enabledFilters.filter(e => e !== category);
      }
    }


  }
  refreshFilters(source){
    source.forEach(element => {
      let type = element.type
      type = type.charAt(0).toUpperCase() + type.substr(1).toLowerCase();
      element.badges.push({"category":"posttype","name":type})
      if(!this.filters){
        this.filters = {}
      }
      element.badges.forEach(badge => {
        badge["activate"] = false;
        if(!this.filters[badge.category]){
          this.filters[badge.category] = []
        }
        if(this.filters[badge.category].filter(e => e.name === badge.name && e.category === badge.category).length == 0){
          this.filters[badge.category].push(badge)
        }
      })
    })
    this.transformFilters();
  }
  refreshProfileFilters(source){
    source.forEach(element => {
      if(!this.filters){
        this.filters = {}
      }
      element.badges.forEach(badge => {
        badge["activate"] = false;
        if(!this.filters[badge.category]){
          this.filters[badge.category] = []
        }
        if(this.filters[badge.category].filter(e => e.name === badge.name && e.category === badge.category).length == 0){
          this.filters[badge.category].push(badge)
        }
      })
    })
    this.transformFilters();
  }
}
