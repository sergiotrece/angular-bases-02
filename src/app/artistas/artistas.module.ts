import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddFormComponent } from './components/add-form/add-form.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddFormComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ArtistasModule { }
