import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contextPath } from '../../assets/config';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  sendMessage(requestBody: any): Observable<any> {
    return this.http.post<any>(contextPath.apiHost + contextPath.sendMessageUrl, requestBody);
  }
}
