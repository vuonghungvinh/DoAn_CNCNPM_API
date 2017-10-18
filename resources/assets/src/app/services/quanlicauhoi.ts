import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QuanLiCauHoi {
constructor(private _http: Http) {

}

    getMaMon() {
        return this._http.get('/api/admin/mon', this.jwt()).map( result => result.json());
    }
    addQuestion(data: any): Observable<any>{
      return this._http.post('/api/admin/question/add', data, this.jwt()).map((response: Response)=> response.json());
    }
	// getUser() {
	// 	let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if (currentUser && currentUser.api_token) {
    //     	return currentUser;
    //     } else {
    //     	return {};
    //     }
    // }
    private jwt() {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          return new RequestOptions({ headers: headers });
      }
  }
}
