import { AddressAddComponent } from './address-add/address-add.component';
import { AddressListComponent } from './address-list/address-list.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'profile',component: ProfileComponent },
  { path: 'address-list',component: AddressListComponent },
  { path: 'address-add',component: AddressAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
