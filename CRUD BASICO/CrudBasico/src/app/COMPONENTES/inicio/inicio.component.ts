import { Component, OnInit } from '@angular/core';
import {EquipoService, Equipo} from '../../SERVICES/equipo.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //varibale
  ListarEquipo: Equipo[];

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
    this.listarEquipo();
  }


  listarEquipo()
  {
    this.EquipoService.getEquipos().subscribe(
      res=>{
        console.log(res);
        this.ListarEquipo=<any>res;
      },
      err => console.log(err)
    );
  }


  eliminar(id:string)
  {
    this.EquipoService.deleteEquipo(id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listarEquipo();
      },
      err=> console.log(err)
      );
  }

  modificar(id:string){
    this.router.navigate(['/edit/'+id]);
  }



}
