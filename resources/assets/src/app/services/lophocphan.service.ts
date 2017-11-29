import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class LophocphanService {
constructor(private _httpclient: HttpClient) {
  }
  getlophocphan() {
    return this._httpclient.get('/api/admin/lophocphan/' , this.jwt()).map((response: Response) => response);
  }
  getlophocphanmon(data: any) {
    return this._httpclient.get('/api/admin/lophocphan/lophpcuamon/' + data, this.jwt()).map((response: Response) => response);
  }
  getlophocphanchuadkthi(data: any) {
    return this._httpclient.get('/api/admin/lophocphan/chuadkthi/' + data, this.jwt()).map((response: Response) => response);
  }
  getalllophocphanchuadkthi() {
    return this._httpclient.get('/api/admin/lophocphan/allchuadkthi', this.jwt()).map((response: Response) => response);
  }
  getMon() {
    return this._httpclient.get('/api/admin/lophocphan/themsinhvienmon', this.jwt()).map((response: Response) => response);
  }
  getSinhVienMonKhongThuocLopHP(id: any) {
    return this._httpclient.post('api/admin/lophocphan/mon/danhsachsinhvien/', id , this.jwt()).map((response: Response) => response);
  }
  addSinhVienVaoLopHP(data: any): Observable<any> {
    return this._httpclient.post('/api/admin/lophocphan/addsinhvien', data, this.jwt()).map((response: Response) => response);
  }
  getLopHPCungMon(data: any) {
    return this._httpclient.get('/api/admin/lophocphan/lophptheomon/' + data, this.jwt()).map((response: Response) => response);
  }
  checkdkthi(data: any) {
    return this._httpclient.get('/api/admin/lophocphan/checkdkthi/' + data, this.jwt()).map((response: Response) => response);
  }
  chuyenlophp(data: any) {
    return this._httpclient.put('api/admin/lophocphan/chuyenlophp' , data , this.jwt()).map((response: Response) => response);
  }
  deleteSinhvien(data: any, mssv: any): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this._httpclient.delete('api/admin/lophocphan/delete/' + data + '/' + mssv, this.jwt()).map((response: Response) => response);
  }
  updateLopHP(id: any) {
    return this._httpclient.put('api/admin/lophocphan/update/' + id, this.jwt()).map((response: Response) => response);
  }
  gettongsinhvientheolophp(data: any) {
    return this._httpclient.get('api/admin/lophocphan/tongsinhvientheolop/' + data, this.jwt()).map((response: Response) => response);
  }
  getdetail(data: any) {
    return this._httpclient.get('/api/admin/lophocphan/danhsachsinhvien/' + data, this.jwt()).map((response: Response) => response);
  }
  getTongCauHoi(data: any) {
    // tslint:disable-next-line:max-line-length
    return this._httpclient.get('/api/admin/lophocphan/danhsachsinhvien/tongcauhoi/' + data, this.jwt()).map((response: Response) => response);
  }
  deleteLopHP(data: any) {
    return this._httpclient.delete('api/admin/lophocphan/deletelophp/' + data , this.jwt()).map((result: Response) => result);
  }
  addLopHP(data: any) {
    return this._httpclient.post('/api/admin/lophocphan/themlophocphan', data, this.jwt()).map((response: Response) => response);
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

