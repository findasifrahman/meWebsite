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
              imagePercent: 90,
              thumbnailsPercent: 10,
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
              small: 'assets/1-small.png',
              medium: 'assets/1-medium.png',
              big: 'assets/1-big.png'
          },
          {
              small: 'assets/2-small.png',
              medium: 'assets/2-medium.png',
              big: 'assets/2-big.png'
          },
          {
              small: 'assets/3-small.png',
              medium: 'assets/3-medium.png',
              big: 'assets/3-big.png'
          },
          {
            small: 'assets/4-small.png',
            medium: 'assets/4-medium.png',
            big: 'assets/4-big.png'
        }
      ];
  }
}
