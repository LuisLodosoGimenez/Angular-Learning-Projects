import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Rodriguez Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;

  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma = 0;
    for (let x = 0; x < this.sueldos.length; x++)
      suma += this.sueldos[x];
    return suma;
  }


  articulos = [{
    codigo: 1,
    descripcion: 'naranjas',
    precio: 540
  },{
    codigo: 2,
    descripcion: 'manzanas',
    precio: 900
  },{
    codigo: 3,
    descripcion: 'peras',
    precio: 490
  }];

  generarNumero() {
    return Math.floor(Math.random() * 3) + 1;
  }
}
