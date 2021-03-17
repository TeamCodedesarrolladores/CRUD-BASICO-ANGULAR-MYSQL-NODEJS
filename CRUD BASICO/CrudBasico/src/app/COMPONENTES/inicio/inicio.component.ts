import { Component, OnInit } from '@angular/core';
import {EquipoService} from '../../SERVICES/equipo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private EquipoService:EquipoService) { }

  ngOnInit(): void {
    this.listarEquipo();
  }


  listarEquipo()
  {
    this.EquipoService.getEquipos().subscribe(
      res=>{
        console.log(res)
      },
      err => console.log(err)
    );
  }



}
