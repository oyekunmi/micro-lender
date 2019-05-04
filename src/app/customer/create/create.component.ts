import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/shared';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/core';
import { Router } from '@angular/router';

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
    private service: CustomerService,
    private router: Router
    ) { }

  ngOnInit() {
    this.appContext.moduleTitle.next('Create Customer');
    this.customerForm = new FormGroup({
      lastName: new FormControl('Ogundele'),
      firstName: new FormControl('Oyesola'),
      name: new FormControl('Oyesola Ogundele', Validators.required),
      phone: new FormControl('07055896062', Validators.required),
      address: new FormControl(''),
      email: new FormControl('oyekunmi@gmail.com'),
      gender: new FormControl('Male')
    });
  }

  createCustomer() {
    this.service.save(this.customerForm.value).subscribe(
      data => { this.router.navigateByUrl('/customer')},
      err => {}
    );
  }

}
