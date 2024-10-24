
import { Component, OnInit } from '@angular/core';
import { Artista } from '../interfaces/artista.interface';
import { artistaService } from '../services/artistas.service';



@Component({
  selector: 'app-artistas-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor( private artistaService: artistaService) {}

  get artista(): Artista[] {
    return [...this.artistaService.artista];

  }

  onDeleteArtista(id: string):void{
    this.artistaService.deleteArtista( id )

  }

  onNewArtista ( artista:Artista ): void {
    this.artistaService.addArtista( artista );
  }




}
