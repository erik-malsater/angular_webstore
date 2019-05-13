import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'products/:id', component: ProductDetailComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ FeedComponent, ProductDetailComponent ];