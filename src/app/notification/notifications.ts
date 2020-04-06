export const notifications = [
  {"title": "New job 1", "type":"jobAlert", "date":[6, 4, 2020], "state":"unread"},
  {"title": "New job 2", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 3", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 4", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 5", "type":"jobAlert", "date":[6, 4, 2020], "state":"unread"},
  {"title": "New job 6", "type":"jobAlert", "date":[6, 4, 2020], "state":"unread"},
  {"title": "New job 7", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 8", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 10", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 11", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 12", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 13", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 14", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 15", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 16", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 17", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 18", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 19", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
  {"title": "New job 20", "type":"jobAlert", "date":[6, 4, 2020], "state":"read"},
]
export interface Notification{
  title: string,
  type:string,
  date:number[]|string,
  state:string|boolean,
  imageUrl?:string
}
