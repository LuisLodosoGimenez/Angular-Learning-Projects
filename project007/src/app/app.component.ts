import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datoNombre='';
  datoMail='';
  datoMensaje='';

  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    mail: new FormControl(''),
    mensaje: new FormControl('')
  });

  submit() {
    if(this.formularioContacto.value.nombre=='' || this.formularioContacto.value.mail=='' ||
    this.formularioContacto.value.mensaje=='') {
      this.datoNombre = 'DEBE RELLENAR TODOS LOS CAMPOS'
      this.datoMail = ''
      this.datoMensaje = ''
    }
    else{
      this.datoNombre = `Nombre = ${this.formularioContacto.value.nombre}`
      this.datoMail = `Mail = ${this.formularioContacto.value.mail}`
      this.datoMensaje = `Mensaje = ${this.formularioContacto.value.mensaje}`
    } 
  }
}