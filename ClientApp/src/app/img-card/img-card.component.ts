import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  private image: CatImage = {
    message: 'PWA',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  private test: any;
  public src: string;

  constructor(private testService: TestService) {
  }

  ngOnInit() {
    this.testService.getTest().subscribe((data: any) => {
      this.test = data;

      this.generateSrc();
    });
  }

  generateSrc(): void {
    const num = Math.floor(Math.random() * 2);
    
    this.src = this.image.api +
      this.test[num].summary +
      '?size=' +
      this.image.fontsize +
      '&ts=' + Date.now();
  }

}

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}
