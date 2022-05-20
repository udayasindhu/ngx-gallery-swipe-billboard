import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Gallery, GalleryItem, ImageItem } from "ng-gallery";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  galleryItems: GalleryItem[];
  galleryImageData;
  constructor(public gallery: Gallery) {}
  ngOnInit() {
    this.galleryImageData = data;
    this.galleryItems = this.galleryImageData.map(
      item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
  }
}

const data = [
  {
    srcUrl: "https://preview.ibb.co/jrsA6R/img12.jpg",
    previewUrl: "https://preview.ibb.co/jrsA6R/img12.jpg"
  },
  {
    srcUrl: "https://preview.ibb.co/kPE1D6/clouds.jpg",
    previewUrl: "https://preview.ibb.co/kPE1D6/clouds.jpg"
  }
];
