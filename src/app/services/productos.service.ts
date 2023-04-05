import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }


  private cargarProductos(){
    this.http.get<Producto[]>("https://perfil-ennio-angular-html-default-rtdb.firebaseio.com/productos_idx.json")
    .subscribe( (resp: Producto[]) => {

      setTimeout(() => {
        this.cargando = false;
      },1000);
      this.productos = resp;
      // console.log(resp);
    });
  }

}
