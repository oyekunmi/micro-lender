import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/shared';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/core';

@Component({
  selector: 'app-customer-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public title$: Subject<string> = this.appContext.moduleTitle;
  customerForm: FormGroup;

  constructor(
    private appContext: ContextService,
    private service: CustomerService
    ) { }

  ngOnInit() {
    this.appContext.moduleTitle.next('Create Customer');
    this.customerForm = new FormGroup({
      lastName: new FormControl(''),
      firstName: new FormControl(''),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl('')
    });
  }

  createCustomer() {
    this.service.save(this.customerForm.value);
  }

}
