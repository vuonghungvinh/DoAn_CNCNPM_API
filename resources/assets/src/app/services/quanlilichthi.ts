import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QuanLiLichThiService {
constructor(private _http: Http) {

}

    getMaMon() {
      return this._http.get('/api/admin/lophocphan/themsinhvienmon', this.jwt()).map( result => result.json());
    }
    getDanhSachLichThi() {
      return this._http.get('/api/admin/lichthi/xemlichthi', this.jwt()).map( result => result.json());
    }
    dangKiLichThi(data: any): Observable<any> {
      return this._http.post('/api/admin/lichthi/add', data, this.jwt()).map((response: Response) => response.json());
    }
    deleteLichThi(data: any): Observable<any> {
      return this._http.delete('api/admin/lichthi/delete/' + data , this.jwt()).map((response: Response) => response.json());
    }
    // addQuestion(data: any): Observable<any> {
    //   return this._http.post('/api/admin/question/add', data, this.jwt()).map((response: Response) => response.json());
    // }
    // deleteQuestion(data: any): Observable<any> {
    //   return this._http.delete('api/admin/question/' + data + '/delete', this.jwt()).map((response: Response) => response.json());
    // }
    // getCauHoiId(data: any) {
    //   return this._http.get('/api/admin/question/listquestion/'+ data, this.jwt()).map( result => result.json());
    // }

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