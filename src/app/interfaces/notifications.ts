export const notifications = [
  {"title": "New job 1", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"unread"},
  {"title": "New job 2", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 3", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 4", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 5", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"unread"},
  {"title": "New job 6", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"unread"},
  {"title": "New job 7", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 8", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 10", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 11", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 12", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 13", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 14", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 15", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 16", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 17", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 18", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 19", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
  {"title": "New job 20", "type":"jobAlert", "timestamp":[6, 4, 2020], "state":"read"},
]
export class Notification{
  id?:any;
  title: string;
  type:string;
  timestamp:Date|number[]|string;
  state: boolean;
  imageUrl?:string

  constructor(title, type){
    this.title = title
    this.type = type
    this.timestamp = new Date().toISOString()
    this.state = true
  }
  static copy(notification?){
    /* this.title = notification['title']
    this.type = notification['type']
    this.timestamp = notification['timestamp']
    this.state = notification['state']
    this.imageUrl = notification['imageUrl'] */
  }
}
