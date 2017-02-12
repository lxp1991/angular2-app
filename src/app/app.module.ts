import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';

import { BookComponent } from './book/book.component';
import { BookService } from "./book/book.service";
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HeaderBarComponent,
    LeftNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
