import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { products } from '../models/productModel';
import { Router } from '@angular/router';
import { ProductviewcardComponent } from '../productviewcard/productviewcard.component';
@Component({
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.css']
})

export class ProjectComponent implements OnInit{
  AllProducts: products[];
  constructor(private pservice: ProductService, private router: Router){
  }
  ngOnInit(){
    this.pservice.getAll().subscribe(resp =>{
      this.AllProducts = resp;
      console.log(resp);
    })
  }
  productsclick(id){
    this.router.navigate(['/productdetail/' + id]);
  }
}
