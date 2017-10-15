import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService {
	constructor(private _http: Http){

	}
	login (data: any) {
		return this._http.post('/api/admin/login', data).map((response: Response)=>{
			let user = response.json();
			if (user && user.token) {
				localStorage.setItem('currentUser', JSON.stringify(user));
			}
		});
	}

	logout() {
	 	localStorage.removeItem("currentUser");
	}

	checkLogin() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
        	return true;
        } else {
        	return false;
        }
    }
    
    getDetail() {
        return this._http.post("/api/admin/info", {}, this.jwt()).map(result=>result.json());
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