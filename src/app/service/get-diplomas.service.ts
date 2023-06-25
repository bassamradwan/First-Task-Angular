import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diplomas } from '../Models/diplomas';

@Injectable({
  providedIn: 'root'
})
export class GetDiplomasService {
  private apiUrl = 'https://testproj2.cloudiax.com/api'
  getall='https://testproj2.cloudiax.com/api/Course/SearchDiploma';
  add='https://testproj2.cloudiax.com/api/Diploma/PostDiploma';
  delet='https://testproj2.cloudiax.com/api/Course/DeleteCourses/';
  edit='https://testproj2.cloudiax.com/api/Diploma/PutDiploma'
  private HttpOptions={};
  constructor(private httpClient:HttpClient) {
    const Token = "YWRtaW5AbW96YWtyZXR5LmNvbTpmcmdo"
    this.HttpOptions = {
      headers : new HttpHeaders ({
        "Content-type" : "Application/json",
        'Authorization': `Bearer YWRtaW5AbW96YWtyZXR5LmNvbTpmcmdo`
      })
    }
  }

  getAllDiplomas(page:any):Observable<any[]>{
      return this.httpClient.post<any[]>(this.getall,{"diplomaName":null, "page": page, "eduCompId": 2},this.HttpOptions)
    }

  // Create diploma
    addDiploma(diploma: any): Observable<any> {
      const url = `${this.apiUrl}/Diploma/PostDiploma`;
      return this.httpClient.post<any>(url, diploma, this.HttpOptions);
    }

  // Delete courses
  deleteCourses(courseIds:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.delet}${courseIds}`,this.HttpOptions);
  }

EditCourses(courseIds:number,data:any){
  return this.httpClient.put<any>(`${this.edit}${courseIds}`,data,this.HttpOptions);
}
}
