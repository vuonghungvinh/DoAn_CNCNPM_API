import { Component, OnDestroy, OnInit } from '@angular/core';
import { LophocphanService } from '../services/lophocphan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LopService } from '../services/quanlilop.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sinhvien_lophocphan',
  templateUrl: './danhsachsinhviencualopHP.component.html',
  styleUrls: ['./danhsachsinhviencualopHP.component.scss'],
  providers : [LophocphanService, LopService]
})
export class DanhsachsinhvienCuaLopHPComponent {
    private subscription: any;
    public listdanhsach: any[];
    public _id: string;
    public listlop: any[];
    public xoasinhvien = [];
    constructor(
      private Danhsachservice: LophocphanService,
      private activatedRouter: ActivatedRoute,
      private lopservice: LopService,
      private router: Router,
    ) {
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
      this.activatedRouter.params.subscribe(params => {
         this._id = params['id'];
        this.Danhsachservice.getdetail(this._id).subscribe(data => {
          this.listdanhsach = data['lophocphan'];
          if (this.listdanhsach[0].mssv == 'null') {
            alert('Không có sinh viên');
            this.router.navigate(['xemdanhsachlophocphan']);
          }
        });
        this.lopservice.getLop().subscribe( data => {
            this.listlop = data['lop'];
        });
      });
      // this.lophocphanservice.getdetail().subscribe(data => {
      // 	console.log(data);
      // 	this.danhsach=data['lophocphan'];
      // 	},error => {
    //           console.log(error);
    //       });
    }
    deleteSinhvien(mssv: string) {
      if (confirm('Bạn muốn xóa sinh viên này?') === true) {
        this.Danhsachservice.deleteSinhvien(this._id, mssv).subscribe( data => {
          if (this.listdanhsach.length == 1) {
              this.router.navigate(['xemdanhsachlophocphan']);
          }
          this.ngOnInit();
        });
      }

    }
}
