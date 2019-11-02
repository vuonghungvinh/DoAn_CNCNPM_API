import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LopService } from '../../services/quanlilop.service';
import { SinhvienService } from '../../services/sinhvien.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lop-component',
  templateUrl: './danhsachsinhvienlop.component.html',
  styleUrls: ['./danhsachsinhvienlop.component.scss'],
  providers: [LopService, SinhvienService]
})

export class SinhVienCuaLopComponent {
  constructor(private lopservice: LopService,
    private router: Router,
    private activerouter: ActivatedRoute,
    private sinhvienservice: SinhvienService
  ) {
  }
  public danhsachlop: any[];
  public tenlop: string;
  public thongtinsinhvien: any[];
  public mssv: string;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.activerouter.params.subscribe( params => {
      this.tenlop = params.id;
    });
    this.lopservice.getSinhVienLop(this.tenlop).subscribe( data => {
      this.danhsachlop = data['sinhvienlop'];
    });
  }
  selectsinhvien(item: any) {
    this.lopservice.getSinhVienLop(this.tenlop).subscribe( data => {
      this.danhsachlop = data['sinhvienlop'];
    });
    this.mssv = item.mssv;
    this.thongtinsinhvien = item;
    console.log(this.thongtinsinhvien);
  }
  reset() {
    this.thongtinsinhvien = null;
    this.ngOnInit();
  }
  updatesinhvien(value) {
    this.sinhvienservice.updateSinhVien(this.mssv, this.thongtinsinhvien).subscribe(data => {
      alert('Cập nhập thành công');
      this.thongtinsinhvien = null;
      this.ngOnInit();
    });
  }
}
