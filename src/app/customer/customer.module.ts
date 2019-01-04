import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { PreviewComponent } from './preview/preview.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, RoleGuard } from '../core';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'create',
        component: CreateComponent,
        canActivate: [RoleGuard],
        data: {
          roles: ['MERCHANT']
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerComponent, CreateComponent, ListComponent, PreviewComponent]
})
export class CustomerModule { }
