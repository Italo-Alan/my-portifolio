// import { ApiService } from './api.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portifolio';

  // constructor(private api: ApiService){
  // }

  // download(){
  //   this.api.donwloadPdf().subscribe(res => {
  //     let url = window.URL.createObjectURL(res);
  //     let a = document.createElement('a');
  //     a.href= url;
  //     a.download = 'italo-cv';
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //     a.remove();
  //   })
  // }
}
