import { Component } from '@angular/core';
import { LophocphanService } from '../services/lophocphan.service';
import { Router } from "@angular/router";


@Component({
  selector: 'xemdanhsach-lop',
  templateUrl: './xemdanhsachlop.component.html',
  styleUrls: ['./xemdanhsachlop.component.scss'],
  providers : [LophocphanService]
})
export class Xemdanhsachlop  { 
	constructor(
			private lophocphanservice:LophocphanService,
			
			){}
	public lophocphans :any[];
	ngOnInit(){
		console.log();
		this.lophocphanservice.getlophocphan().subscribe(data => {
			console.log(data);
			this.lophocphans=data['lophocphan'];
			},error => {
            console.log(error);
        });
	}
}