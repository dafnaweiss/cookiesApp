import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Outpost } from './Outpost';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OutpostService {

  private outpostsUrl = 'api/outposts';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  // GET the list of all the Outposts
  getOutposts(): Observable<Outpost[]> {
    return this.http.get<Outpost[]>(this.outpostsUrl).pipe(
      tap( outposts => this.log(`fetched outposts`)),
      catchError(this.handleError('getOutpost', []))
    );
  }

  // GET an Outpost by ID
  getOutpost(id: number): Observable<Outpost> {
    const url = `${this.outpostsUrl}/${id}`;

    return this.http.get<Outpost>(url).pipe(
      tap(_ => this.log(`fetched outpost id=${id}`)),
      catchError(this.handleError<Outpost>(`getOutpost id=${id}`))
    );
  }

  // POST - ADD a new outpost
  addOutpost(outpost: Outpost): Observable<any> {
    return this.http.post<Outpost>(this.outpostsUrl, outpost, httpOptions).pipe(
      tap((outpost: Outpost) => this.log(`added outpost id=${outpost.id}`)),
      catchError(this.handleError<Outpost>('addOutpost'))
    );
  }

  // PUT - UPDATE and SAVE an outpost
  updateOutpost(outpost: Outpost): Observable<any> {
    return this.http.put<Outpost>(this.outpostsUrl, outpost, httpOptions).pipe(
      tap(_ => this.log(`update and save outpost id=${outpost.id}`)),
      catchError(this.handleError<Outpost>('updateOutpost'))
    );
  }

  // DELETE an outpost
  deleteOutpost(outpost: Outpost | number ): Observable<Outpost> {
    // the type of the parameter can be either Outpost or number(delete by id)
    const id = typeof outpost === 'number' ? outpost : outpost.id;
    const url = `${this.outpostsUrl}/${id}`;

    return this.http.delete<Outpost>(url, httpOptions).pipe(
      tap(_ => this.log(`delete outpost id=${id}`)),
      catchError(this.handleError<Outpost>('deleteOutpost'))
    );
  }

  // Handle ERRORS
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);  // log to console
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a OutpostService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

}
