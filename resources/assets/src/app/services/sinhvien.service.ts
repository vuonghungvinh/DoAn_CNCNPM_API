import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()

export class SinhvienService {
	constructor(
    private _httpclient: HttpClient
    ){
	}

	getdanhsachsinhvien(){
		return this._httpclient.get("/api/admin/students", this.jwt()).map((result: Response)=>result.json());
	}
	// addstudents(data: any): Observable<any>{
	// 	return this._http.post("/api/admin/students/create", data, this.jwt()).map((response: Response) => response.json());
  // }
	addstudents(data: any): Observable<any>{
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		return this._httpclient.post("/api/admin/students/create", data, this.jwt()).map((response: Response) => response.json());
  }
  uploadFile(data: any){
    return this._httpclient.post('/api/admin/students/uploadfile', data, this.jwt()).map((response: Response) => response.json());
  }

	private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        // let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
        // return new RequestOptions({ headers: headers });
        return {headers: new HttpHeaders({ 'Authorization': 'Bearer ' + currentUser.token })};
    }
    return {};
  }
}
