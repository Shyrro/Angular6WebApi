// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';

// Services
import { TestService } from './test.service';


@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
