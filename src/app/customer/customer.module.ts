import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerComponent, CreateComponent, ListComponent, PreviewComponent]
})
export class CustomerModule { }
