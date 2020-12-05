import { EditRackComponent } from './components/edit-rack/edit-rack.component';
import { AddRackComponent } from './components/add-rack/add-rack.component';
import { RackViewComponent } from './components/rack-view/rack-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'racks', pathMatch: 'full' },
  { path: 'racks', component: RackViewComponent },
  { path: 'racks/:rackId', component: RackViewComponent },
  { path: 'addrack', component: AddRackComponent },
  { path: 'editrack', component: EditRackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
