import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class LophocphanService {
constructor(private _httpclient: HttpClient) {
  }
  getlophocphan() {
    return this._httpclient.get('/api/admin/lophocphan', this.jwt()).map((response: Response) => response.json());
  }
  getMon() {
    return this._httpclient.get('/api/admin/lophocphan/themsinhvienmon', this.jwt()).map((response: Response) => response.json());
  }
  getSinhVienMonKhongThuocMon(id) {
    return this._httpclient.get('api/admin/lophocphan/mon/danhsachsinhvien/' + id, this.jwt()).map((response: Response) => response.json());
  }
  addSinhVienVaoMon(data: any): Observable<any> {
    return this._httpclient.post('/api/admin/lophocphan/addsinhvien', data, this.jwt()).map((response: Response) => response.json());
  }
  deleteSinhvien(data: any, mssv: any): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this._httpclient.delete('api/admin/lophocphan/delete/' + data + '/' + mssv, this.jwt()).map((response: Response) => response.json());
  }
  getdetail(data: any) {
    return this._httpclient.get('/api/admin/lophocphan/danhsachsinhvien/' + data, this.jwt()).map((response: Response) => response.json());
  }
  getTongCauHoi(data: any) {
    // tslint:disable-next-line:max-line-length
    return this._httpclient.get('/api/admin/lophocphan/danhsachsinhvien/tongcauhoi/' + data, this.jwt()).map((response: Response) => response.json());
  }

  addMon(data: any) {
    return this._httpclient.post('/api/admin/lophocphan/themlophocphan', data, this.jwt()).map((response: Response) => response.json());
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

