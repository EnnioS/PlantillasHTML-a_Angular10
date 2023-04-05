import { Component, OnInit } from '@angular/core';
import { InfoEquipo } from 'src/app/interfaces/info.equipo.interface';
import { InfopaginaService } from 'src/app/services/infopagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo:InfoEquipo={};
  constructor(public _infoService: InfopaginaService) { 
   
  }
  
  ngOnInit(): void {
    
  }

}
