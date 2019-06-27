import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './usercomponents/homeComponent/home.component';
import { ProjectComponent } from './usercomponents/projectComponent/project.component';
import { ProductdetailComponent } from './usercomponents/productdetail/productdetail.component';
import { CertificatesComponent  } from './usercomponents/certificates/certificates.component';
import { ClientsComponent } from './usercomponents/clients/clients.component';
import { FindmeComponent } from './usercomponents/findme/findme.component';
const routes: Routes = [
  { path:'', component:HomeComponent,pathMatch:'full' },
  { path: 'projects', component: ProjectComponent },
  { path: 'productdetail/:id', component: ProductdetailComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'findme', component: FindmeComponent },
  { path: 'clients', component: ClientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
