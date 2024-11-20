import { Component, OnInit } from '@angular/core';
import { Conferencias } from './conferencias';
import { ConferenciasService } from './conferencias.service';
@Component({
  selector: 'app-conferencias',
  templateUrl: './conferencias.component.html',
  styleUrls: ['./conferencias.component.css']
})
export class ConferenciasComponent implements OnInit {
  conferencias: Conferencias[] = [];
 
  currentDate = new Date();
  averageSeasons: number = 0;
  selectedConferencias: Conferencias | null = null; // Nueva propiedad para la serie seleccionada
  constructor(private conferenciasService: ConferenciasService) { }

  getConferencias() {
    this.conferenciasService.getConferencias().subscribe(conferencias => {
      this.conferencias = conferencias;
      this.calculateConferencias();
    });
  }

  calculateConferencias() {
    for(let index=0;index<this.conferencias.length;index++){

      let conferencias:Conferencias= this.conferencias[index];
      if(conferencias.starts>this.currentDate){
          this.averageSeasons+=1;
      }
  }
    
  }

  selectConferencias(conferencias: Conferencias) {
    this.selectedConferencias = conferencias; // Método para seleccionar la serie
  }

  ngOnInit() {
    this.getConferencias();
  }

}
