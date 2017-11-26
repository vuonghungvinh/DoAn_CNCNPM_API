import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class XemLaiBaiThi {
    constructor(
        private _httpclient: HttpClient
        ) {
    }

    list() {
        return this._httpclient.get('/api/admin/xemlaibaithi', this.jwt()).map((result: Response) => result);
    }

    private jwt() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            // let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            // return new RequestOptions({ headers: headers });
            return {  headers: new HttpHeaders({ 'Authorization': 'Bearer ' + currentUser.token })};
        }
        return {};
    }
}
