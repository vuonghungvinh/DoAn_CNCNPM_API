import { Component, OnDestroy, OnInit } from '@angular/core';
import { LophocphanService } from '../services/lophocphan.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'sinhvien_lophocphan',
  templateUrl: './danhsachsinhvien.component.html',
  styleUrls: ['./danhsachsinhvien.component.scss'],
  providers : [LophocphanService]
})
export class Danhsachsinhvien {
    private subscription: any;
    public listdanhsach: any[];
    public _id: number;
    public xoasinhvien = [];
    constructor(
      private Danhsachservice: LophocphanService,
      private activatedRouter: ActivatedRoute,
      private router: Router,
    ) {
    }
    ngOnInit() {
      this.activatedRouter.params.subscribe(params => {
         this._id = params['id'];
        this.Danhsachservice.getdetail(this._id).subscribe(data => {
          console.log(data);
          this.listdanhsach = data['lophocphan'];
          if (this.listdanhsach.length === 0) {
            alert('Không có sinh viên');
            this.router.navigate(['xemdanhsachlop']);
          }
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
      if (confirm("Are you sure") === true) {
        this.Danhsachservice.deleteSinhvien(this._id, mssv).subscribe( data => {
          this.ngOnInit();
        });
      }

    }
}
