import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { ImageComponent } from './image/image.component';
import { NewImageComponent } from './new-image/new-image.component';
import { ImageDetailsComponent } from './image-details/image-details.component';

import { ImageService } from './image.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageGridComponent,
    ImageComponent,
    NewImageComponent,
    ImageDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
