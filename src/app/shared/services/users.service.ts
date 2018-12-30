import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {User} from "../models/user.model";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable()
export class UsersService {
  host: string;

  constructor(
    private http: HttpClient
  ) {
    this.host = environment.api;
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User[]>(`${this.host}/users?email=${email}`)
      .pipe(
        map((users: User[]) => users[0] ? users[0] : undefined),
      );
  }

  createNewUser(user: User) {
    return this.http.post(`${this.host}/users`, user);
  }
}
