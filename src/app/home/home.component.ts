import { Component } from '@angular/core';
import { NgIf } from "../../../node_modules/@angular/common/index";
import { NgModule } from '@angular/core';
import { product } from '../models/product';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { DetailProdComponent } from '../detail-prod/detail-prod.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NotFoundComponent } from '../not-found/not-found.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  color :string =""
  searchName: string=""


  title : string = "Hello 4SE2"

  products : product[] = [
    {id: 1, name: "iphone 14", price: 10.99, description: "Description for Product 1" , quantity: 10 , nbrLike: 0, image :"https://www.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"},
    {id : 2 ,name: "iphone 15", price: 19.99, description: "Description for Product 2", quantity: 5, nbrLike: 0, image :"https://www.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"},
    {id : 3, name: "iphone 16", price: 5.49, description: "Description for Product 3", quantity: 4, nbrLike: 0, image :"https://www.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"},
    {id : 4, name: "iphone 17", price: 15.00, description: "Description for Product 4", quantity: 2, nbrLike: 0, image :"https://www.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"}
  ]

  buy(id : number){
  // decrementation de la quantitée
    //p.quantity--;
    //this.products[i].quantity--;
     // trouver le produit avec l'id id
    const product = this.products.find(p => p.id === id);
      product!.quantity--;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    DetailProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

