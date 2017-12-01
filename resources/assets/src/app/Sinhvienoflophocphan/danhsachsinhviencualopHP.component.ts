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
    public danhsachlop_hp_cungmon: any[];
    public _id: string;
    public listlop: any[];
    public xoasinhvien = [];
    public lop: string;
    public selectmssv: string;
    public sinhvien: any;
    public checkdkthi = false;
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
         this.Danhsachservice.checkdkthi(this._id).subscribe( data => {
           this.checkdkthi = true;
        });
        this.Danhsachservice.getdetail(this._id).subscribe(data => {
          this.listdanhsach = data['lophocphan'];
          this.Danhsachservice.getLopHPCungMon(this.listdanhsach[0].mamon).subscribe( data2 => {
            this.danhsachlop_hp_cungmon = data2['mon_lophocphan'];
          });
          if (this.listdanhsach[0].mssv == 'null') {
            alert('Không có sinh viên');
            this.router.navigate(['xemdanhsachmon']);
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
    selectsinhvien(sinhvien: any) {
      this.Danhsachservice.checkdkthi(this._id).subscribe( data => {
        this.selectmssv = sinhvien.mssv;
      }, error => {
        alert('Lớp đã đk thi, không thể chuyển lớp cho SV này');
      });
      this.sinhvien = sinhvien;
      this.listlop.forEach(element => {
        if (element.id === sinhvien.student.malop) {
          this.lop = element.tenlop;
        }
      });
      this.danhsachlop_hp_cungmon.forEach((element, index) => {
        if (element.malophp === this.listdanhsach[0].malophp) {
          this.danhsachlop_hp_cungmon.splice(index, 1);
        }
      });
    }
    getLop(malop) {
      let tenlop = '';
      this.listlop.map( lop => {
        if (lop.id === malop) {
          tenlop = lop.tenlop;
        }
      });
      return tenlop;
    }
    chuyenlop(value: any) {
      value['mssv'] = this.selectmssv;
      value['lopcu'] = this.listdanhsach[0].malophp;
      this.Danhsachservice.chuyenlophp(value).subscribe( data => {
        alert('Chuyển thành công');
        this.Danhsachservice.getdetail(this._id).subscribe( data2 => {
          this.listdanhsach = null;
          this.selectmssv = null;
          this.listdanhsach = data2['lophocphan'];
        });
      });
      console.log(this.listdanhsach);
      console.log(value);
    }
    deleteSinhvien(mssv: string) {
      if (confirm('Bạn muốn xóa sinh viên này?') === true) {
        this.Danhsachservice.deleteSinhvien(this._id, mssv).subscribe( data => {
          if (this.listdanhsach.length === 1) {
              this.router.navigate(['xemdanhsachlophocphan']);
          }
          this.ngOnInit();
        });
      }

    }
}
