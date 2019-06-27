import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { products } from '../models/productModel';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  showButton : boolean = false;
  constructor(private router: Router, private route: ActivatedRoute,private pservice: ProductService) { }
  image1url: string;
  image2url: string;
  ngOnInit() {
    this.route.params.subscribe(param =>{
      console.log( param['id'] );
      this.pservice.getbyid(param['id']).subscribe(val=>{
        this.image1url = val.image2url;
        this.image2url = val.image3url;
        console.log(val);
      })
    })
  }
  moreDetails(){
    this.showButton = true;
    const tile = document.createElement('app-moredetails');
    tile.setAttribute('image2u', this.image2url);


    const content = document.getElementById('content');
    content.appendChild(tile);
  }
}
