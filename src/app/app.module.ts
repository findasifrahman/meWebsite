import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedmodulesModule } from './commonmodule/sharedmodule/sharedmodules.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxGalleryModule } from 'ngx-gallery';
import { createCustomElement } from '@angular/elements';

import { PinchZoomModule } from 'ngx-pinch-zoom';

import { HomeComponent } from './usercomponents/homeComponent/home.component';
import { FooterComponent } from './usercomponents/footer/footer.component';
import { ProjectComponent } from './usercomponents/projectComponent/project.component';
import { ProductviewcardComponent } from './usercomponents/productviewcard/productviewcard.component';
import { ProductdetailComponent } from './usercomponents/productdetail/productdetail.component';
import { MoredetailsComponent } from './usercomponents/moredetails/moredetails.component';
import { CertificatesComponent } from './usercomponents/certificates/certificates.component';
import { ClientsComponent } from './usercomponents/clients/clients.component';
import { FindmeComponent } from './usercomponents/findme/findme.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ProjectComponent,
    ProductviewcardComponent,
    ProductdetailComponent,
    MoredetailsComponent,
    CertificatesComponent,
    ClientsComponent,
    FindmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedmodulesModule,
    NgxGalleryModule,
    PinchZoomModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  entryComponents: [MoredetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector:Injector){
    const comp = createCustomElement(MoredetailsComponent, {injector: this.injector});
    customElements.define('app-moredetails',comp)
  }
}
