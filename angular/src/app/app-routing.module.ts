import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { ImageDetailsComponent } from './image-details/image-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'images',
    pathMatch: 'full'
  },
  {
    path: 'images',
    component: ImageGridComponent
  },
  {
    path: 'images/:id',
    component: ImageDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
