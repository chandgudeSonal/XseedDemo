import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor(private http:HttpClient) { }
  private defaultComponent: string[] = [];
 private url="https://api.zoom.us/v2/users/me/meetings"
  setDefaultWorkflow(workflowArray: string[]) {
    this.defaultComponent = workflowArray;
  }

  getDefaultWorkflow() {
    return this.defaultComponent;
  }
  getMeeting(data:any):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.url}/endpoint`, data, { headers });
  }
}
