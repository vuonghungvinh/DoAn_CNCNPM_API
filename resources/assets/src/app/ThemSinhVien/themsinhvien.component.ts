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

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
      this.lopservice.getKhoa().subscribe( data => {
        this.khoahoc = data['khoa'];
        console.log(this.khoahoc);
      });
    }
  changeKhoa(event) {
    this.selectkhoa = false;
    this.lopservice.getLopCuaKhoa(event.target.value).subscribe( data => {
      this.lopcuakhoa = data['lopcuakhoa'];
    });
  }
  setGioiTinh(gender: boolean) {
    this.setgioitinh = gender;
    console.log(gender);
  }

	// up len serve
  addstudents(value) {
    value['gioitinh'] = this.setgioitinh;
    console.log(value);
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
