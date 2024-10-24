import { Injectable } from '@angular/core';
import { Artista } from '../interfaces/artista.interface';
import { v4 as uuid }from 'uuid'



@Injectable({providedIn: 'root'})
export class artistaService {

  public artista: Artista [] = [{
    id: uuid(),
    nombre: 'Duki',
    nivel: 10000
  }, {
    id: uuid(),
    nombre: 'YSY',
    nivel: 9
  },{
    id: uuid(),
    nombre: 'LIT',
    nivel: 8
  }];

  addArtista( artista: Artista ):void {
    const newArtista: Artista = {
      id: uuid(), ...artista
    }
    this.artista.push(newArtista);

  }

  // onDeleteArtist (index: number){
  //   this.artista.splice(index,1)
  deleteArtista (id : string){
    this.artista = this.artista.filter( artista => artista.id != id );
  }

}
