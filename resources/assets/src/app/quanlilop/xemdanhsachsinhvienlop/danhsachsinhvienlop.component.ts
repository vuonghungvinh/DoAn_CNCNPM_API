import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LopService } from '../../services/quanlilop.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lop-component',
  templateUrl: './danhsachsinhvienlop.component.html',
  styleUrls: ['./danhsachsinhvienlop.component.scss'],
  providers: [LopService]
})

export class SinhVienCuaLopComponent {
  constructor(private lopservice: LopService,
    private router: Router,
    private activerouter: ActivatedRoute
  ) {
  }
  public danhsachlop: any[];
  public tenlop: string;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.activerouter.params.subscribe( params => {
      this.tenlop = params.id;
    });
    this.lopservice.getSinhVienLop(this.tenlop).subscribe( data => {
      this.danhsachlop = data['sinhvienlop'];
    });
  }
}
