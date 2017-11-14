import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LopService } from '../../services/quanlilop.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lop-component',
  templateUrl: './/xemdanhsachlop.component.html',
  styleUrls: ['./xemdanhsachlop.component.scss'],
  providers: [LopService]
})

export class LopComponent {
  constructor(private lopservice: LopService,
    private router: Router
  ) {
  }
  public danhsachlop: any[];
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.lopservice.getdanhsachloptongsinhvien().subscribe( data => {
      this.danhsachlop = data['danhsachlop'];
    });
  }
}
