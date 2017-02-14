import { Injectable } from '@angular/core';
import  {Observable,Subject} from 'rxjs';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VehicleDataService {



  // pass data among components using a service.
  private refreshListFlag = new Subject<boolean>();
  refreshList$ = this.refreshListFlag.asObservable();

  constructor(public httpSvc: Http) { }

  getListOfProducts() : Observable<any> {
    return this.httpSvc.get("app/api/vehiclelist.json")
  .map((response)=>    response.json()    )
  .catch((error) => Observable.throw(error.json()));
  }

 

    refreshList(flag : boolean){
       this.refreshListFlag.next(flag);
    }

  

}
