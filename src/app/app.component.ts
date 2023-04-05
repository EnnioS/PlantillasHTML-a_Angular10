import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from './services/infopagina.service';
import { ProductosService } from './services/productos.service';
import { Producto } from './interfaces/producto.interface';
import { InfoEquipo } from './interfaces/info.equipo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public _infopaginaService: InfopaginaService, public _productosService: ProductosService ){ }

  ngOnInit(): void {
    
  }
}
