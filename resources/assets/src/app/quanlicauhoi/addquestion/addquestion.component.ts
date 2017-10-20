import { Component, OnInit } from '@angular/core';
import { QuanLiCauHoi } from '../../services/quanlicauhoi';
import { Router } from '@angular/router';

@Component({
  selector: 'add-question-component',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss'],
  providers: [QuanLiCauHoi]
})

export class AddQuestionComponent {
constructor(
  private taomoicauhoi: QuanLiCauHoi,
  private router: Router){

  }
  public cau=['A','B','C','D','E','F'];
  public biendem = 2;
  public countlist = 0;
  public list_dapan = [
    { ten: 'Cau '+this.cau[0], noi_dung: '', is_true: false },
    { ten: 'Cau '+this.cau[1], noi_dung: '', is_true: false },
  ];
  public mon: any[];
  ngOnInit() {
    this.taomoicauhoi.getMaMon().subscribe( data => {
      this.mon = data['mon'];
    });
  }
  checkSelect(i:number, check: boolean){
       if (!this.list_dapan[i].is_true){
          this.countlist+=1;
        }
        else if(this.list_dapan[i].is_true) {
          this.countlist-=1;
        }
        if (this.countlist == this.list_dapan.length){
          alert("Hãy chọn ít nhất một đáp án sai. ");
        }
  }
  add_dapan() {
    if (this.list_dapan.length < 6){
      this.list_dapan.push({ ten: 'Cau '+this.cau[this.biendem], noi_dung: '', is_true: false });
      this.biendem +=1;
    }
  }

  remove_dapan() {
    if (this.list_dapan.length > 2) {
      this.list_dapan.splice(this.list_dapan.length - 1, 1);
      this.biendem -=1;
    }
  }
  addQuestion(value: any) {
    if (this.countlist == 0){
     alert("Chọn ít nhất một đáp án đúng.");
     return false;
    }
    else if(this.countlist == this.list_dapan.length){
      alert("Không thể chọn tất cả đáp án đều đúng. ");
      return false;
    }
    else{
      console.log(value);
      value['list_dap_an'] = this.list_dapan;
      alert("Thêm câu hỏi thành công.");
      this.taomoicauhoi.addQuestion(value).subscribe(data=>{
        this.router.navigate(['/question']);
      });
    }
  }
}
