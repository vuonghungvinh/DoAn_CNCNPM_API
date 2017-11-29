import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import 'rxjs/Subscription';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { XemLaiBaiThi } from '../services/xemlaibaithi.service';

@Component({
    selector: 'xem-lai-bai-thi',
    templateUrl: './xemchitietbaithi.component.html',
    styleUrls: ['./xemchitietbaithi.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [XemLaiBaiThi]
})

// tslint:disable-next-line:component-class-suffix
export class XemChiTietBaiThi implements OnInit, OnDestroy {
    private subscription: Subscription[] = [];
    public data;
    public constructor(
        private activatedRoute: ActivatedRoute,
        private xemlaibaithiService: XemLaiBaiThi
    ) {}

    ngOnInit() {
        this.subscription.push(
            this.activatedRoute.params.subscribe(params => {
                this.xemlaibaithiService.detail(params.id).subscribe(data => {
                    console.log(data);
                    this.data = data;
                });
            })
        );
    }

    xuLyDapAn(idcauhoi, dapandung, dapantraloi, id_dapan) {
        id_dapan = id_dapan.toString();
        if (dapandung[dapandung.length - 1] === ',') {
            dapandung = dapandung.substring(0, dapandung.length - 1);
        }
        const listdapandung = dapandung.split(',');
        const listdapantraloi = dapantraloi.split(';');
        let listanswers = [];
        for (let i = 0; i < listdapantraloi.length; i += 1) {
            const tmp = listdapantraloi[i].split(':');
            if (tmp[0] == idcauhoi) {
                listanswers = tmp[1].split(' ');
            }
        }
        let result = '';
        if (listanswers.length < 1 && listdapandung.indexOf(id_dapan) >= 0) {
            console.log('correct');
            return 'correct';
        }
        if (listanswers.indexOf(id_dapan) >= 0) {
            if (listdapandung.indexOf(id_dapan) >= 0) {
                console.log('right');
                return 'right';
            }
            return 'wrong';
        }
        console.log('herererer');
        console.log(listdapandung);
        if (listdapandung.indexOf(id_dapan) >= 0) {
            return 'correct';
        }
        return '';
    }

    ngOnDestroy() {
        this.subscription.forEach(sub => sub.unsubscribe());
    }
}
