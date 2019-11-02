import { Component, OnInit } from '@angular/core';
import { LopService } from '../../services/quanlilop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'themlop-component',
  templateUrl: './themlop.component.html',
  styleUrls: ['./themlop.component.scss'],
  providers: [LopService]
})

export class ThemLopComponent {
  constructor(private lopservice: LopService,
              private router: Router) {
  }
  public danhsachkhoa: any[];
  public setkhoa = true;
  public khoamoi: number;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.lopservice.getKhoa().subscribe( data => {
      this.danhsachkhoa = data['khoa'];
      this.khoamoi = this.danhsachkhoa[this.danhsachkhoa.length - 1].khoa + 1;
    });
  }
  setkhoamoi(setkhoa: boolean) {
    this.setkhoa = setkhoa;
  }
  addlop(value: any) {
    if (!this.setkhoa) {
      value['khoa'] = this.khoamoi
    }
    this.lopservice.themLop(value).subscribe( data => {
      alert('Thêm lớp thành công');
      this.router.navigate(['xemdanhsachlopsinhvien']);
    }, error => {
      alert('Lớp đã tồn tại');
    });
  }
  navigate() {
    this.router.navigate(['xemdanhsachlopsinhvien']);
  }
}
