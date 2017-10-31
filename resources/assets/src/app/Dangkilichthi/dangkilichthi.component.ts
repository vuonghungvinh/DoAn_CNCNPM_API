import { Component,OnInit } from '@angular/core';
import { QuanLiLichThiService } from '../services/quanlilichthi';
import { LophocphanService } from '../services/lophocphan.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dangki-lich',
  templateUrl: './dangkilichthi.component.html',
  styleUrls: ['./dangkilichthi.component.scss'],
  providers: [QuanLiLichThiService,LophocphanService],
})
export class DangkilichthiComponent {
  constructor(
    private lichthi: QuanLiLichThiService,
    private sinhvienlophocphan: LophocphanService) {
    }
  public listsinhvien: any[];
  public mon: any[];
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.lichthi.getMaMon().subscribe( data => {
      this.mon = data['mon'];
    });
  }
  getIdmon(event) {
    this.sinhvienlophocphan.getdetail(event.target.value).subscribe( data=> {
      this.listsinhvien = data['lophocphan'];
    })
  }
}
