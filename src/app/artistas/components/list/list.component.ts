import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Artista } from '../../interfaces/artista.interface';

@Component({
  selector: 'artistas-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {




  @Input()
  public artistaLista: Artista[] = [{
    nombre: 'Emilia',
    nivel: 7
}]

@Output()
  public onDeleteArtista: EventEmitter<string> = new EventEmitter();


// onDeleteArtist(index: number):void {
//   this.onDeleteArtista.emit(index);
// }
  onDeleteArtist(id?:string) {
    if (!id) return;
    this.onDeleteArtista.emit(id);

  }

}
