import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()

export class LophocphanService {
	constructor(private _http: Http){
	}
	getlophocphan(){
		return this._http.get('/api/admin/lophocphan', this.jwt()).map(result => result.json());
	}
  getMon() {
    return this._http.get('/api/admin/lophocphan/themsinhvienmon', this.jwt()).map(result => result.json());
  }
  getSinhVienMonKhongThuocMon(id) {
    return this._http.get('api/admin/lophocphan/mon/danhsachsinhvien/' + id, this.jwt()).map(result => result.json());
  }
  addSinhVienVaoMon(data: any): Observable<any> {
    return this._http.post('/api/admin/lophocphan/addsinhvien', data, this.jwt()).map((response: Response) => response.json());
  }
	getdetail(data: any){
		return this._http.get('/api/admin/lophocphan/danhsachsinhvien/' + data, this.jwt()).map(result=>result.json());
	}
	private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
}
}

