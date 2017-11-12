import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuanLiCauHoi } from '../../services/quanlicauhoi';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'update-question',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.scss'],
  providers: [QuanLiCauHoi]
})

export class UpdateQuestionComponent {
  public id: number;
  public cauhoi: any[];
  public submit = true;
  public list_dapan = [];
  constructor(
    private updatequestion: QuanLiCauHoi,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.id = params.id;
    });
    this.updatequestion.getCauHoiId(this.id).subscribe( data => {
      this.cauhoi = data['cauhoi'];
      let dapantrue = true;
      const arr_dapan = this.cauhoi[0].dapan.split(',');
      this.cauhoi[0].listdapan.forEach(element => {
        if (arr_dapan.indexOf(element.id.toString()) >= 0) { dapantrue = true; }
        else {dapantrue = false; }
        this.list_dapan.push({id: element.id,
        ten: element.tendapan,
        noi_dung: element.noidungdapan,
        is_true: dapantrue });
      });
    });
  }
  updateQuestion(value: any) {
    this.id = 0;
    value['listdapan'] = this.list_dapan;
    this.list_dapan.forEach(element => {
      if (element.is_true) { this.id++; }
    });
    if (this.id === 0) {
      alert('Vui lòng chọn 1 đáp án đúng');
      return false;
    }
    else if (this.id === this.list_dapan.length) {
      alert('Vui lòng chọn ít nhất 1 đáp án sai');
      return false;
    }
    else if (this.submit) {
      this.submit = false;
      alert ('Succsess');
      this.updatequestion.updateQuestion(value, this.cauhoi[0].id).subscribe( data => {
        this.router.navigate(['question']);
      });
    }
  }
  navigate(){
    this.router.navigate(['question']);
  }
}

