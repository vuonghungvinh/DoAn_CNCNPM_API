import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LopHocPhan {
constructor(private _httpclient: HttpClient) {

}

    getLopHocPhan() {
        return this._httpclient.get('/api/admin/mon', this.jwt()).map((result: Response) => result.json());
    }
    deleteLopHP(data: any): Observable<any> {
      return this._httpclient.delete('api/admin/mon/delete/' + data , this.jwt()).map((result: Response) => result.json());
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
      // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      // if (currentUser && currentUser.token) {
      //     let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      //     return new RequestOptions({ headers: headers });
      // }
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          // let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          // return new RequestOptions({ headers: headers });
          return {headers: new HttpHeaders({ 'Authorization': 'Bearer ' + currentUser.token })};
      }
      return {};
  }
}
