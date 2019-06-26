import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './usercomponents/homeComponent/home.component';
import { ProjectComponent } from './usercomponents/projectComponent/project.component';
import { ProductdetailComponent } from './usercomponents/productdetail/productdetail.component';
const routes: Routes = [
  { path:'', component:HomeComponent,pathMatch:'full' },
  { path: 'projects', component: ProjectComponent },
  { path: 'productdetail/:id', component: ProductdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
