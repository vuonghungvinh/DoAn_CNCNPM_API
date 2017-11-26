import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SinhvienService } from '../services/sinhvien.service';
import { LopService } from '../services/quanlilop.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'them-sinhvien',
  templateUrl: './themsinhvien.component.html',
  styleUrls: ['./themsinhvien.component.scss'],
  providers: [ SinhvienService, LopService ]
})
// tslint:disable-next-line:component-class-suffix
export class ThemSinhVien  {
	// tslint:disable-next-line:indent
	constructor(
    private lopservice: LopService,
    private sinhvienservice: SinhvienService,
    private router: Router) {
    }
    public students: any[];
    public setgioitinh = true;
    public myFile: File;
    public selectkhoa = true;
    public khoahoc: any[];
    public submit = true;
    public lopcuakhoa: any[];
    public maxday = new Date();
    public checkday = false;

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
      this.lopservice.getKhoa().subscribe( data => {
        this.khoahoc = data['khoa'];
        console.log(this.khoahoc);
      });
      this.maxday.setFullYear(this.maxday.getFullYear()-18);
      // tslint:disable-next-line:no-unused-expression
    }
  changeKhoa(event) {
    this.selectkhoa = false;
    this.lopservice.getLopCuaKhoa(event.target.value).subscribe( data => {
      this.lopcuakhoa = data['lopcuakhoa'];
    });
  }
  hello(event) {
    if (event.target.value > this.maxday.toJSON().split('T')[0]) {
      this.checkday = true;
    }
    else { this.checkday = false; }
    // console.log(event.target.value);
    // console.log(this.maxday.toJSON().split('T')[0]);
  }
  setGioiTinh(gender: boolean) {
    this.setgioitinh = gender;
    console.log(gender);
  }

	// up len serve
  addstudents(value) {
    value['gioitinh'] = this.setgioitinh;
    console.log(value);
    if (this.checkday) {
      this.submit = false;
      alert('Vui lòng nhập lại ngày sinh');
    }
    else { this.submit = true; }
    if (this.submit) {
      this.submit = false;
      this.sinhvienservice.addstudents(value).subscribe(data => {
        console.log(data);
        alert('Thêm sinh viên thành công');
        this.router.navigate(['/xemdanhsach']);
       }, error => {
        alert('Có lỗi');
       });
    }

  }
}
