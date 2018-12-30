import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {User} from "../models/user.model";
import {map} from "rxjs/operators";

@Injectable()
export class UsersService {
  host: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) {
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User[]>(`${this.host}/users?email=${email}`)
      .pipe(
        map((users: User[]) => users[0] ? users[0] : undefined),
      );
  }

  createNewUser(user: User){
    return this.http.post(`${this.host}/users`, user);
  }
}
