import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { estudiante } from '../entidades/estudiante';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario:estudiante= {} as estudiante;
  usuarios:any;
  
  constructor(private http:HttpClient, private router:Router) { 

    http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{
      this.usuarios=response;
    });

  }

//********** ENVIAR *********************/
  
enviarPos():void{
  
  this.http.post<estudiante>('https://frozen-meadow-48728.herokuapp.com/registrar',this.usuario)
  .subscribe(response=>{
  console.log(response);
  this.usuario= {} as estudiante;
  alert('El estudiante se registro');
  window.location.reload();
  });

  }

//********** EDITAR *********************/

editar(id:number):void{
console.log("el id es igual a = "+id);
this.http.get<estudiante>('https://frozen-meadow-48728.herokuapp.com/uno/'+id)
.subscribe(response=>{
this.usuario=response;
});

}

//********** ELIMINAR *********************/

eliminar(id:number):void{
console.log("el id es igual a ="+id);
this.http.delete<estudiante>('https://frozen-meadow-48728.herokuapp.com/eliminar/'+id)
.subscribe(response=>{
alert('Se eliminara el estudiante');
window.location.reload();

})

}

  ngOnInit(): void {
  }

}
