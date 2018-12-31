import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs/internal/Observable";
import {WFMEvent} from "../models/event.model";

@Injectable()
export class EventsService {
  host: string;

  constructor(
    private http: HttpClient
  ) {
    this.host = environment.api;
  }

  addEvent(event: WFMEvent): Observable<WFMEvent> {
    return this.http.post<WFMEvent>(`${this.host}/events`, event);
  }

}
