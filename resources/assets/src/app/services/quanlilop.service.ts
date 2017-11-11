import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LopService {
constructor(private _httpclient: HttpClient) {

}

  getLop() {
    return this._httpclient.get('/api/admin/lop', this.jwt()).map((response: Response) => response);
  }
  getSinhVienLop(data: any) {
    return this._httpclient.get('/api/admin/lop/' + data, this.jwt()).map((response: Response) => response);
  }
  getKhoa() {
    return this._httpclient.get('/api/admin/lop/khoa', this.jwt()).map((response: Response) => response);
  }
  getLopCuaKhoa(data: any) {
    return this._httpclient.get('/api/admin/lop/khoa/' + data, this.jwt()).map((response: Response) => response);
  }
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
