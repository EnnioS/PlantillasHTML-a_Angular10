import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { ProductoDesc } from '../interfaces/producto-desc.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }


  private cargarProductos(){

    return new Promise<void>((resolve, reject)=>{
      this.http.get<Producto[]>("https://perfil-ennio-angular-html-default-rtdb.firebaseio.com/productos_idx.json")
      .subscribe( (resp: Producto[]) => {

        setTimeout(() => {
          this.cargando = false;
        },1000);
        this.productos = resp;
        resolve();
      });
    });

    
  }

  public getProducto(id:string){
    return this.http.get<ProductoDesc>(`https://perfil-ennio-angular-html-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  public buscarProducto(termino: string){

    if(this.productos.length === 0){
      //cargar productos
      this.cargarProductos().then(() => {
        //ejecutar despues de tener los porductos
        //alicar filtro
        this.filtrarProductos(termino);
      });
    }else{
      //aplicar filtro si ya esta cargado los productos
      this.filtrarProductos(termino);
    }

    

    // console.log(this.productosFiltrado);
  }

  private filtrarProductos(termino:string){

    this.productosFiltrado = [];
    termino = termino.toLowerCase();

    // this.productosFiltrado = this.productos.filter((producto) => {
    //   producto.categoria.indexOf(termino) >= 0 || producto.titulo.indexOf(termino) >= 0;
    // });
    
    this.productos.forEach(prod => {
      const tituloLowe = prod.titulo.toLowerCase();
      if(prod.categoria.indexOf(termino) >= 0 || tituloLowe.indexOf(termino) >= 0){
        this.productosFiltrado.push(prod);
      }
    });
  }

}
