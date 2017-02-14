import { URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { 
    ApiService
} from '../../_core/services';

@Injectable()
export class SpotifyService {
  
  path:string = 'projects';

  constructor(
      private api: ApiService
  ) {}


  loadList(search = ""): Observable<any[]> {

    let params: URLSearchParams = new URLSearchParams();
    params.set('search', search);

    return this.api.get(`/${this.path}`);
  }
/*
  getAll() {
    return this.api.get(`/${this.path}`);
  }

  get(projectId:number): Observable<any> {
    return this.api.get(`/${this.path}/${projectId}`);
  }

  // Consultar: en la api se muestra id pero si es nuevo no tiene id
  create(project): Observable<any> {
    return this.api.post(`/${this.path}`, project);
  }
  
  update(project): Observable<any> {
    return this.api.put(`/${this.path}/${project.id}`, project);
  }

  delete(projectId:number): Observable<any> {
    return this.api.delete(`/${this.path}/${projectId}`);
  }*/

}
