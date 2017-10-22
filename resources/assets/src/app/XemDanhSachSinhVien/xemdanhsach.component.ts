import { Component,OnInit } from '@angular/core';
import { SinhvienService } from '../services/sinhvien.service';
import { Router } from "@angular/router";

@Component({
  selector: 'xem-danhsach',
  templateUrl: './xemdanhsach.component.html',
  styleUrls: ['./xemdanhsach.component.scss'],
  providers : [SinhvienService]
})
export class XemDanhSach  { 
	constructor(
		private sinhvienservice:SinhvienService,
		
		){

	}
	public students :any[];
	ngOnInit(){
		console.log();
		this.sinhvienservice.getdanhsachsinhvien().subscribe(data => {
			console.log(data);
			this.students=data['students'];
			},error => {
            console.log(error);
        });
	}
}
