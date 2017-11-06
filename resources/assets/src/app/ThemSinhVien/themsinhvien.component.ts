import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SinhvienService } from '../services/sinhvien.service';
@Component({
  selector: 'them-sinhvien',
  templateUrl: './themsinhvien.component.html',
  styleUrls: ['./themsinhvien.component.scss'],
  providers: [ SinhvienService ]
})
// tslint:disable-next-line:component-class-suffix
export class ThemSinhVien  {
	// tslint:disable-next-line:indent
	constructor(
		private sinhvienservice: SinhvienService,
		private router: Router) {
    }
	  public students: any[];
    public setgioitinh = true;
    public myFile: File;

	ngOnInit(){
      this.sinhvienservice.getdanhsachsinhvien().subscribe(data => {
      this.students=data['students'];
		});
  }
  setGioiTinh(gender: boolean) {
    this.setgioitinh = gender;
    console.log(gender);
  }

	//up len serve
	addstudents(value) {

    value['gioitinh']= this.setgioitinh;
    console.log(value);
    this.sinhvienservice.addstudents(value).subscribe(data => {
      console.log(data);
      alert('Thêm sinh viên thành công');
      this.router.navigate(['/xemdanhsach']);
     }, error => {
      alert('Có lỗi');
     });
	}
}
