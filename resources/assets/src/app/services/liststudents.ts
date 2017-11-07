import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentsService {
constructor(private _http: Http) {

}

    getStudents() {
        return this._http.get('/api/admin/students', this.jwt()).map( result => result.json());
    }
    getSinhVienLop(data: any) {
      return this._http.get('/api/admin/students/lop/' + data, this.jwt()).map( result => result.json());
    }
    deleteSinhVien(data: any) {
      return this._http.delete('/api/admin/students/delete/' +data, this.jwt()).map( result => result.json());
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
