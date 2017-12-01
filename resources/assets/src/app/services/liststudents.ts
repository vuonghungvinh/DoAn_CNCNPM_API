import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentsService {
constructor(private _httpclient: HttpClient) {

}

    getStudents() {
        return this._httpclient.get('/api/admin/students', this.jwt()).map((result: Response) => result);
    }
    getSinhVienLop(data: any) {
      return this._httpclient.get('/api/admin/students/lop/' + data, this.jwt()).map((result: Response) => result);
    }
    deleteSinhVien(data: any): Observable<any> {
      return this._httpclient.delete('/api/admin/students/delete/' + data, this.jwt()).map((result: Response) => result);
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
