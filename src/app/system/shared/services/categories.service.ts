import {Injectable} from '@angular/core';

import {Category} from '../models/category.model';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class CategoriesService {
  host: string;

  constructor(public http: HttpClient) {
    this.host = environment.api
  }

  addCategory(category: Category){
    return this.http.post(`${this.host}/categories`, category);
  }
}
