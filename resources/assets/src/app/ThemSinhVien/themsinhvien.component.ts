import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SinhvienService } from '../services/sinhvien.service';
@Component({
  selector: 'them-sinhvien',
  templateUrl: './themsinhvien.component.html',
  styleUrls: ['./themsinhvien.component.scss'],
  providers: [ SinhvienService ]
})
export class ThemSinhVien  {
	constructor(
		private sinhvienservice: SinhvienService,
		private router: Router) {
    }
	  public students:any[];
    public setgioitinh = true;

	ngOnInit(){
		//lay danh sach lop da co bo vao select box
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
    this.sinhvienservice.addstudents(value).subscribe(data=>{
      console.log(data);
      alert("Thêm sinh viên thành công");
      this.router.navigate(['/xemdanhsach']);
     });
	// this.router.navigate(['xemdanhsach']);
	}
}
