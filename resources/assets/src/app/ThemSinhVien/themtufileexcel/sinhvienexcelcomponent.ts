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
    var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    var pattern = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    console.log('choosen file type is ' + file);
    console.dir("dir is " + file);
    if (!file.type.match(pattern)) {
        return;
    }
     let wb: XLSX.WorkSheet = XLSX.readFile(file, {type: 'binary'});
     console.log(wb);
     let sheetName = wb.SheetNames[0];
     console.log("Selected file sheet Name "+ sheetName);
  }
  addstudents(value: any){
 }
}

