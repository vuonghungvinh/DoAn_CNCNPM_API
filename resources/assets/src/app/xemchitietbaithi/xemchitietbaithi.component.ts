import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import 'rxjs/Subscription';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { XemLaiBaiThi } from '../services/xemlaibaithi.service';

@Component({
    selector: 'xem-lai-bai-thi',
    templateUrl: './xemchitietbaithi.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [XemLaiBaiThi]
})

// tslint:disable-next-line:component-class-suffix
export class XemChiTietBaiThi implements OnInit, OnDestroy {
    private subscription: Subscription[] = [];

    public constructor(
        private activatedRoute: ActivatedRoute,
        private xemlaibaithiService: XemLaiBaiThi
    ) {}

    ngOnInit() {
        this.subscription.push(
            this.activatedRoute.params.subscribe(params => {
                this.xemlaibaithiService.detail(params.id).subscribe(data => {
                    console.log(data);
                });
            })
        );
    }

    ngOnDestroy() {
        this.subscription.forEach(sub => sub.unsubscribe());
    }
}
