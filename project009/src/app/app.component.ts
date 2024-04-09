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
  resultado = '';

  formAlumno = new FormGroup({
    dni: new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl('')
    })
  });

  submit() {
    if (this.formAlumno.value.notas && this.formAlumno.value.dni && this.formAlumno.value.nombre) {
      if (this.formAlumno.value.notas.nota1 &&
        this.formAlumno.value.notas.nota2 &&
        this.formAlumno.value.notas.nota3) {
            let nota1 = parseInt(this.formAlumno.value.notas.nota1);
            let nota2 = parseInt(this.formAlumno.value.notas.nota2);
            let nota3 = parseInt(this.formAlumno.value.notas.nota3);
            if (Number.isNaN(nota1)||Number.isNaN(nota2)||Number.isNaN(nota3))
              this.resultado = "DEBE INTRODUCIR NÚMEROS EN LAS NOTAS.";
            else if (nota1 >= 4 && nota2 >= 4 && nota3 >= 4 && ((nota1+nota2+nota3)/3) >= 5)
              this.resultado = `El alumno ha sido aprobado con una media de: ${(nota1+nota2+nota3)/3}.`;
            else
              this.resultado = `El alumno no ha sido aprobado.`
                
      }
    } else this.resultado = "Debe rellenar todos los campos."
  }
}