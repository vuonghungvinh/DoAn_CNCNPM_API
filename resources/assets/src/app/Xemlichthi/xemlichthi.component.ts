import { Component, OnInit } from '@angular/core';
import { QuanLiLichThiService } from '../services/quanlilichthi';
import { Router } from '@angular/router';
@Component({
  selector: 'xem-lichthi',
  templateUrl: './xemlichthi.component.html',
  styleUrls: ['./xemlichthi.component.scss'],
  providers: [QuanLiLichThiService],
})

export class Xemlichthi {
  constructor(
    private xemlichthi: QuanLiLichThiService,
    private route: Router) {
    }
  public listlichthi: any[];
  ngOnInit() {
    this.xemlichthi.getDanhSachLichThi().subscribe( data => {
      this.listlichthi = data['listlichthi'];
    });
  }
  dangKi(){
    this.route.navigate(['/dangkilichthi']);
  }
  deleteLichthi(id: number){
    if ((confirm("Bạn chắc chắn muốn xóa")=== true)) {
      this.xemlichthi.deleteLichThi(id).subscribe( data => {
        this.ngOnInit();
      });
    }
  }
}
