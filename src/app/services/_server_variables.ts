import { HttpHeaders } from '@angular/common/http';

export const SERVER_URL = "http://localhost:3000/";
export const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE',
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
