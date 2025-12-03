import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { not } from 'rxjs/internal/util/not';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';

const routes: Routes = [
  {path: '', redirectTo: 'product', pathMatch: 'full'},
   {path: 'product', component:HomeComponent},
  {path: 'detail/:id', component:DetailProdComponent},
  { path: 'suggestion', component:ListSuggestionComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
