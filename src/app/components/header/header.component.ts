import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private api: ApiService){
  }

  // download(blob: any){
  //   let fileURL: any = URL.createObjectURL(blob);
  //   let b = document.createElement('b');
  //   b.href = fileURL;
  //   b.target = '_blank';
  //   b.download= 'italo-cv.pdf';
  //   b.click()
  // }

}
