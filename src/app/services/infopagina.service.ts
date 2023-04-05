import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info.equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {
  
  info: InfoPagina = {};
  cargada = false;


  constructor(private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  
  }

  private cargarInfo(){
      //Leer el archivo JSON
      this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
  
        this.cargada = true;
        this.info = resp;
          console.log(resp);
        });
  }

  private cargarEquipo(){
      //Leer el archivo JSON
      this.http.get('https://perfil-ennio-angular-html-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (equipo: InfoPagina) => {
  
        this.cargada = true;
        this.info = equipo.equipo;
          console.log(equipo);
        });
  }
}
