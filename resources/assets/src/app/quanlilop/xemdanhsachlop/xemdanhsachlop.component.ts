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

  tableToExcel(table, name) {
    const uri = 'data:application/vnd.ms-excel;base64,'
        // tslint:disable-next-line:max-line-length
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
        , base64 = function(s) { return window.btoa(decodeURIComponent(encodeURIComponent(s)))}
        , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) };
            if (!table.nodeType) {
               table = document.getElementById(table);
            }
            const ctx = {worksheet: name || 'Worksheet', table: table.innerHTML };
            window.location.href = uri + base64(format(template, ctx));
        }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.lopservice.getdanhsachloptongsinhvien().subscribe( data => {
      this.danhsachlop = data['danhsachlop'];
    });
  }
}
