import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PrincipalComponent } from './principal/principal.component';
import { SecundarioComponent } from './secundario/secundario.component';

const routes: Routes = [
//localhsot:4200
  {path:'',component:InicioComponent},

  //localhsot:4200/registro

  {path:"editar",component:PrincipalComponent},

  //localhsot:4200/lista

  {path:"eliminar",component:SecundarioComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
