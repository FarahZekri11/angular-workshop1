import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
//import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { RouterModule } from '@angular/router';
import { SuggestionsModule } from './features/suggestions/suggestions.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListSuggestionComponent,
    NotFoundComponent,
    DetailProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    SuggestionsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
