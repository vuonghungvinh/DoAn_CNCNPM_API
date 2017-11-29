import { Component, OnInit } from '@angular/core';
import { SinhvienService } from '../services/sinhvien.service';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LopService } from '../services/quanlilop.service';

@Component({
  selector: 'xem-danhsach',
  templateUrl: './xemdanhsachsinhvien.component.html',
  styleUrls: ['./xemdanhsachsinhvien.component.scss'],
  providers: [SinhvienService,
              LopService]
})

export class XemDanhSachComponent implements OnInit {
  constructor(
    private lopservice: LopService,
    private studentservice: SinhvienService,
    private router: Router) {
}
  public students: any[];
  public lop: any[];
  public hienthileft = 0;
  public hienthiright = 20;
  public tongsoluong: number;
  public checkleft = true;
  public checkright = false;
  ngOnInit() {
    this.studentservice.getdanhsachsinhvien().subscribe(data => {
      this.students = data['students'];
      console.log('get data success');
    }, error => {
        console.log(error);
    });
    this.studentservice.gettongsoluongsinhvien().subscribe( data => {
      this.tongsoluong = data['tongsinhvien'];
      if (this.hienthiright > data['tongsinhvien']) {
        this.checkright = true;
      }
    });
    this.lopservice.getLop().subscribe(data => {
      this.lop = data['lop'];
    }, error => {
      console.log(error);
    });
  }
  previous() {
    this.checkright = false;
    if (this.hienthileft - 20 === 0) {
      this.checkleft = true;
    }
    // tslint:disable-next-line:one-line
    else {
      this.checkleft = false;
    }
    this.hienthiright -= 20;
    this.hienthileft -= 20;
  }
  next() {
    this.checkleft = false;
    if (this.hienthiright + 20 < this.tongsoluong) {
      this.checkright = false;
    }
    // tslint:disable-next-line:one-line
    else {
      this.checkright = true;
    }
    this.hienthiright += 20;
    this.hienthileft += 20;
  }
  xemTheoLop(event) {
    this.hienthileft = 0;
    this.hienthiright = 20;
    this.checkleft = true;
    this.checkright = false;
    this.studentservice.getSinhVienLop(event.target.value).subscribe( data => {
      this.students = data['students'];
    });
    this.studentservice.getsoluongsinhvientheolop(event.target.value).subscribe( data => {
      this.tongsoluong = data['tongsinhvien'];
      if (this.hienthiright > data['tongsinhvien']) {
        this.checkright = true;
      }
    });
  }
  // deleteSinhVien(mssv: string) {
  //   if (confirm('Bạn có chắc muốn xóa sinh vien này?') === true) {
  //     this.studentservice.deleteSinhVien(mssv).subscribe( data => {
  //       alert('Succsess');
  //       this.ngOnInit();
  //     });
  //   }
  // }
}
