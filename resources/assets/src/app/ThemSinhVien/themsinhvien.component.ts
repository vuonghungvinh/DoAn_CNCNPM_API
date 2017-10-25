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
		private sinhvienservice :SinhvienService,
		private router :Router){}
	public students:any[];


	ngOnInit(){
		//lay danh sach lop da co bo vao select box
		this.sinhvienservice.getdanhsachsinhvien().subscribe(data =>{
			this.students=data['students'];
		});
	}
	//up len serve
	addstudents(value){
	console.log(value);
	this.sinhvienservice.addstudents(value).subscribe(data=>{
    console.log(data);
    alert("Thêm sinh viên thành công");
    this.router.navigate(['/xemdanhsach']);

	});
	// this.router.navigate(['xemdanhsach']);

	}
}
