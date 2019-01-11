import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";
import { Customer } from "../models";

@Injectable()
export class CustomerService{

    constructor(private api: ApiService){}

    save(customer: Customer): Observable<Customer>{
        return this.api.post('/customers', {customer});
    }

    get(username: string): Observable<Customer>{
        return this.api.get('/customers/' + username );
    }

    
    
}