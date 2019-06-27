import { Provider,Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';
import { reduce,map} from 'rxjs/operators'
import { products } from '../models/productModel';
@Injectable({
   providedIn: 'root'
})

export class ProductService{

  productlist: products[] = [
    { id: 1, name: 'Interactive Learning Aid Kiosk',title: 'Unparalleled access to information in a Single Device in a Secure way',image1url: 'assets/products/kiosk1.png',image2url:'assets/products/kiosk2.png',image3url:'assets/products/kiosk3.png',description:'' },
    { id: 2, name: 'E-procurement Software',title: 'It is a single web portal from where supplier and provider is able to perform their procurement related activities ',image1url: 'assets/products/e-procure1.png',image2url:'assets/products/e-procure2.png',image3url:'assets/products/e-procure3.png',description:'' },
    { id: 3,name: 'Time Attendance Software',title: 'Fingerprint Time attendance system consist of a fingerprint scanner hardware with a time attendance HR management software',image1url: 'assets/products/fingerprint1.png',image2url:'assets/products/fingerprint2.png',image3url:'assets/products/fingerprint3.png',description:'' },
    { id: 4,name: 'Wemey',title: 'Wemey is a smartphone-controlled switching and dimming app. It has three output in a single box',image1url: 'assets/products/wemey1.png',image2url:'assets/products/wemey2.png',image3url:'assets/products/wemey3.png',description:'' },
    { id: 5,name: 'Event scheduling Calendar',title: 'The event & course scheduling calendar is a single web portal for calender view of events',image1url: 'assets/products/calender1.png',image2url:'assets/products/calendar2.png',image3url:'assets/products/calendar3.png',description:'' },
  ];

  constructor(){
  }

  getAll(){
    return of(this.productlist);
  }
  getbyid(id) : Observable<any>{
    const source = of(this.productlist);
    return source.pipe(map((val) =>{
          return val.find(mval => mval.id == id)
     })
    )
  }
}
