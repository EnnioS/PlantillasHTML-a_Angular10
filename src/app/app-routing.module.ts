import { NgModule } from "@angular/core";

import {Routes, RouterModule} from '@angular/router';
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";

const app_routes: Routes = [
    {path: 'home', component: PortafolioComponent },
    {path: 'about', component: AboutComponent },
    {path: 'item', component: ItemComponent },
    {path: '**', pathMatch:'full', redirectTo: 'home' }
]

@NgModule({
    imports:[
        RouterModule.forRoot(app_routes,{useHash: true})//useHash es para infdicarles que no existen carpetas con el nmbe de la ruta, cuando se agregue aun servidor Linux habrá que quitarlo y configurar el htaccess para decirle al servido que todas las rutas pasen por el index.html
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}