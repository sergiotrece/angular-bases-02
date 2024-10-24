import { Component, EventEmitter, Output, output } from '@angular/core';
import { Artista } from '../../interfaces/artista.interface';

@Component({
  selector: 'artistas-add-form',
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {

  @Output()
  public onNewArtista: EventEmitter<Artista> = new EventEmitter();



  public artista: Artista = {
    nombre: '',
    nivel: 0
    }

    emitArtista():void{


      console.log(this.artista);
      if (this.artista.nombre.length === 0) return;

      this.onNewArtista.emit({...this.artista});

      this.artista.nombre = '';
      this.artista.nivel = 0

    }
}
