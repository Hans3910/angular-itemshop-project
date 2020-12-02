import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Item} from './item';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ItemApiService {
  private backendUrl: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpToItemAPI: HttpClient, private messageService: MessageService) {
    this.backendUrl = 'http://localhost:9000/items';
  }

  public findAllItems(): Observable<Item[]> {
    this.messageService.add('List of items requested');
    return this.httpToItemAPI.get<Item[]>(this.backendUrl)
      .pipe(catchError(this.handleError<Item[]>('Get Items', [])));
  }
  /** POST: add a new hero to the server */
  addItem(item: Item): Observable<Item> {
    console.log(item);
    return this.httpToItemAPI.post<Item>(this.backendUrl, item, this.httpOptions).pipe(
      tap((newItem: Item) => this.log(`added item w/ name=${newItem.name}`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }

  getItem(id: string): Observable<Item> {
    const url = `${this.backendUrl}/${id}`;
    return this.httpToItemAPI.get<Item>(url).pipe(
      tap(_ => this.log(`fetched item id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string): void {
    this.messageService.add(`ItemService: ${message}`);
  }
}

