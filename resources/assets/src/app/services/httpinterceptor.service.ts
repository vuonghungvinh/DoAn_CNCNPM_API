import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private alertService: AlertService,
        private authenticationService: AuthenticationService
    ) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do((event: HttpEvent<any>) => {
            console.log('Good request');
        }, error => {
            if (error.status === 401) {
                this.alertService.error('Token đã hết hạn vui lòng đăng nhập lại', true);
                this.authenticationService.logout();
                this.router.navigate(['./login']);
            }
        });
    }
}
