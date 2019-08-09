import { Injectable } from '@angular/core';
import { Target } from './models/target.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TargetsService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = 'http://localhost:3000/companies';

  // to READ targets list data from server
  getListOfTargets(): Observable<Target[]> {
    return this.httpClient.get<Target[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  // to get particular target data for modifying
  getSingleTarget(id: number): Observable<Target> {
    return this.httpClient.get<Target>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
  // to WRITE the newly created target data into json file
  addTarget(data: Target): Observable<Target> {
    return this.httpClient.post<Target>(this.baseUrl, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  // to UPDATE the modified information of exisiting target
  updateTarget(data: Target): Observable<Target> {
    return this.httpClient.put<Target>(`${this.baseUrl}/${data.id}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  // to DELETE the target data from json
  deleteTarget(id: number): Observable<void> {
    console.log(id);
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    console.error('error', errorResponse);
    return throwError('There is an issue with the service');
  }
}
