import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Customer } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomerService {

    constructor(private api: ApiService) {}

    save(customer: Customer): Observable<Customer> {
        customer.username = customer.email;
        customer.profile = {
            role: 'customer'
        };
        return this.api.post('/customers', customer).pipe(
            map( data => {
                return data;
            } )
        );
    }

    get(username: string): Observable<Customer> {
        return this.api.get('/customers/' + username );
    }
}