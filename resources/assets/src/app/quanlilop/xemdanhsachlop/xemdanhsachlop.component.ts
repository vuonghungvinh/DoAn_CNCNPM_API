import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LopService } from '../../services/quanlilop.service';
@Component({
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

}
