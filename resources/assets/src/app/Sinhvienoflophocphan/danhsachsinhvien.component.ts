import { Component, OnDestroy } from '@angular/core';
import { LophocphanService } from '../services/lophocphan.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'sinhvien_lophocphan',
  templateUrl: './danhsachsinhvien.component.html',
  styleUrls: ['./danhsachsinhvien.component.scss'],
  providers : [LophocphanService]
})
export class Danhsachsinhvien implements OnDestroy {
	private subscription: any;
	public listdanhsach :any[];

	constructor(
		private Danhsachservice:LophocphanService,
		private activatedRouter :ActivatedRoute,
	){}
	
	ngOnInit(){
		this.subscription = this.activatedRouter.params.subscribe(params=>{
			let _id = params['id'];
			this.Danhsachservice.getdetail(_id).subscribe(data => {
				console.log(data);
				this.listdanhsach=data['lophocphan'];
			});
		});
		

		// this.lophocphanservice.getdetail().subscribe(data => {
		// 	console.log(data);
		// 	this.danhsach=data['lophocphan'];
		// 	},error => {
  //           console.log(error);
  //       });
	}


	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}