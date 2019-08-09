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

  getListOfTargets(): Observable<Target[]> {
    return this.httpClient.get<Target[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  getSingleTarget(id: number): Observable<Target> {
    return this.httpClient.get<Target>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  addTarget(data: Target): Observable<Target> {
    return this.httpClient.post<Target>(this.baseUrl, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  updateTarget(data: Target): Observable<Target> {
    return this.httpClient.put<Target>(`${this.baseUrl}/${data.id}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

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
