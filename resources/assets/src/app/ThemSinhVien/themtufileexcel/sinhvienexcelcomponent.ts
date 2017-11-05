import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SinhvienService } from '../../services/sinhvien.service';
import { Headers, Http, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import { read, IWorkBook, IWorkSheet, utils } from 'ts-xlsx';
import * as XLSX from 'xlsx';

@Component({
  selector: 'themexcel-sinhvien',
  templateUrl: './sinhvienexcelcomponent..html',
  styleUrls: ['./sinhvienexcelcomponent.scss'],
  providers: [ SinhvienService ]
})

export class SinhVienExcelComponent {
  constructor(private sinhivienservice: SinhvienService,
              private router: Router,
              public http: Http){
   }
  files: FileList;
  filestring: string;
  ngOnInit() {

  }
  onChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.sinhivienservice.uploadFile(formData).subscribe( data=> {
          alert("sucssec");
          this.router.navigate['xemdanhsach'];
        })
        // this.http.post(`http://localhost:8000/api/admin/students/uploadfile`, formData, options)
        //     .map(res => res.json())
        //     .subscribe(
        //         data => console.log('success'),
        //         error => console.log(error)
        //     )
    }
  }
  addstudents(value: any){
 }
}

