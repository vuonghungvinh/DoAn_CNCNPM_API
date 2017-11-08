import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QuanLiCauHoi {
constructor(private _httpclient: HttpClient) {

}

    getMaMon() {
      return this._httpclient.get('/api/admin/mon', this.jwt()).map((response: Response) => response.json());
    }
    getCauHoi() {
      return this._httpclient.get('/api/admin/question/listquestion', this.jwt()).map((response: Response) => response.json());
    }
    addQuestion(data: any): Observable<any> {
      return this._httpclient.post('/api/admin/question/add', data, this.jwt()).map((response: Response) => response.json());
    }
    deleteQuestion(data: any): Observable<any> {
      return this._httpclient.delete('api/admin/question/' + data + '/delete', this.jwt()).map((response: Response) => response.json());
    }
    updateQuestion(data: any, id: any) {
      return this._httpclient.put('api/admin/question/update/' + id, data, this.jwt()).map((response: Response) => response.json());
    }
    getCauHoiId(data: any) {
      return this._httpclient.get('/api/admin/question/listquestion/' + data,  this.jwt()).map((response: Response) => response.json());
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
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        // let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
        // return new RequestOptions({ headers: headers });
        return {headers: new HttpHeaders({ 'Authorization': 'Bearer ' + currentUser.token })};
    }
    return {};
  }
}
