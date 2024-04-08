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
  mensaje = ''
  conversion = '';
  potenciaNumero = '';
  cantidad = '';

  formularioConversion = new FormGroup({
    numerodecimal: new FormControl(''),
    base: new FormControl('octal'),
    potencia: new FormControl(''),
    largo: new FormControl(true)
  });

  submit() {
    this.mensaje=''
    this.conversion=''
    this.potenciaNumero=''
    this.cantidad=''
    if (this.formularioConversion.value.numerodecimal) {
      if (this.formularioConversion.value.base == "hexadecimal")
        this.conversion = parseInt(this.formularioConversion.value.numerodecimal).toString(16);
      if (this.formularioConversion.value.base == "octal")
        this.conversion = parseInt(this.formularioConversion.value.numerodecimal).toString(8);
      if (this.formularioConversion.value.potencia && !(this.formularioConversion.value.potencia == 'No elevar'))
        this.potenciaNumero = Math.pow(parseInt(this.formularioConversion.value.numerodecimal), parseInt(this.formularioConversion.value.potencia)).toString();
      if (this.formularioConversion.value.largo)
        this.cantidad = this.formularioConversion.value.numerodecimal.length.toString();
    }else this.mensaje = 'AÑADE UN NÚMERO'
  }

}