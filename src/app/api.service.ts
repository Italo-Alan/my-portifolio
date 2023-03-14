import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'my-portifolio/src';

  constructor(private http: HttpClient) {
  }

  downloadPdf(){
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get(this.url, { headers: headers, responseType: 'blob'});
  }

}
