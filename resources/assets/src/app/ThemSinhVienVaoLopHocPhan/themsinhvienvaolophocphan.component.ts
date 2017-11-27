import { Component, OnInit } from '@angular/core';
import { LophocphanService } from '../services/lophocphan.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'them-lop',
  templateUrl: './themsinhvienvaolophocphan.component.html',
  styleUrls: ['./themsinhvienvaolophocphan.component.scss'],
  providers: [LophocphanService]
})
export class ThemsinhvienvaolophocphanComponent {
  constructor(
    private activerouter: ActivatedRoute,
    private lophocphan: LophocphanService,
    private router: Router) {
    }
    public mon: any[];
    public sinhvien: any[];
    public idmon: number;
    public submit = true;
    public malophp: string;
    public checkclick = true;
    public namebutton = 'Chọn tất cả';
    public listsinhvien = [];
    public id_mon: any;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.activerouter.params.subscribe(params => {
      this.id_mon = params['id'];
    });
    this.lophocphan.getlophocphanchuadkthi(this.id_mon).subscribe( data => {
      this.mon = data['lophocphan'];
    });
  }
  alllistsinhvien(value: any) {
    if (this.listsinhvien.indexOf(value) >= 0 ) {
      this.listsinhvien.splice(this.listsinhvien.indexOf(value), 1);
    }
    // tslint:disable-next-line:one-line
    else {
      this.listsinhvien.push(value);
    }
  }
  chontatca() {
    if (this.checkclick) {
      this.namebutton = 'Bỏ chọn';
      this.checkclick = false;
      this.sinhvien.forEach(element => {
        if (this.listsinhvien.indexOf(element.mssv) === -1) {
          this.listsinhvien.push(element.mssv);
        }
      });
    }
    // tslint:disable-next-line:one-line
    else {
      this.namebutton = 'Chọn tất cả';
      this.checkclick = true;
      this.listsinhvien.splice(0, this.listsinhvien.length);
    }
  }
  getMaLopHP(event) {
    this.mon.forEach(element => {
      if (element.malophp === event.target.value) {
        console.log(element);
        this.lophocphan.getSinhVienMonKhongThuocLopHP(element).subscribe( data => {
          this.sinhvien = data ['sinhvien'];
          this.malophp = event.target.value;
          this.idmon = element.mamon;
        });
      }
    });
    // this.lophocphan.getSinhVienMonKhongThuocLopHP(event.target.value).subscribe( data => {
    //   this.sinhvien = data ['sinhvien'];
    //   this.malophp = event.target.value;
    //   this.mon.forEach(element => {
    //     if (element.malophp === this.malophp) {
    //       this.idmon = element.mamon;
    //     }
    //   });
    // });
  }
  themSinhVien(value: any) {
    console.log(this.listsinhvien);
    value['mamon'] = this.idmon;
    value['malophp'] = this.malophp;
    value['listsinhvien'] = this.listsinhvien;
    if (this.listsinhvien.length === 0) {
      alert('Vui lòng chọn ít nhất 1 sinh viên');
    }
    // tslint:disable-next-line:one-line
    else {
      if (this.submit) {
        this.submit = false;
        this.lophocphan.addSinhVienVaoLopHP(value).subscribe( data => {
          alert('Thêm  thành công.');
          this.router.navigate(['/xemdanhsachmon']);
        });
      }
    }
  }
}
