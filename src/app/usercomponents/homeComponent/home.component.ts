import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

      this.galleryOptions = [
          {
              'previewCloseOnEsc': true,
              'previewKeyboardNavigation': true,
              'imageBullets': true,
              'imageAutoPlay': true,
              width: '100%',
              height: '400px',
              thumbnailsColumns: 4,
              imageAnimation: NgxGalleryAnimation.Slide
          },
          // max-width 800
          {
              breakpoint: 800,
              width: '100%',
              height: '600px',
              imagePercent: 80,
              thumbnailsPercent: 20,
              thumbnailsMargin: 20,
              thumbnailMargin: 20
          },
          // max-width 400
          {
              breakpoint: 400,
              preview: false
          }
      ];

      this.galleryImages = [
          {
              small: 'assets/1-small.jpg',
              medium: 'assets/1-medium.jpg',
              big: 'assets/1-big.jpg'
          },
          {
              small: 'assets/2-small.jpg',
              medium: 'assets/2-medium.jpg',
              big: 'assets/2-big.jpg'
          },
          {
              small: 'assets/3-small.jpg',
              medium: 'assets/3-medium.jpg',
              big: 'assets/3-big.jpg'
          },
          {
            small: 'assets/4-small.jpg',
            medium: 'assets/4-medium.jpg',
            big: 'assets/4-big.jpg'
        }
      ];
  }
}
