import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()

export class SinhvienService {
	constructor(private _http: Http){
	}

	getdanhsachsinhvien(){
		return this._http.get("/api/admin/students", this.jwt()).map(result=>result.json());
	}
	addstudents(data: any): Observable<any>{
		return this._http.post("/api/admin/students/create", data, this.jwt()).map((response: Response) => response.json());
  }
  uploadFile(data: any){
    return this._http.post('/api/admin/students/uploadfile', data, this.jwt()).map((response: Response) => response.json());
  }

	private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
}
}
