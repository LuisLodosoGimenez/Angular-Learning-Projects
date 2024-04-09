import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidacionesPropias } from './validaciones-propias';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formularioContacto = new FormGroup({
    numero: new FormControl('', [ValidacionesPropias.multiplo5])
  });

  submit() {
    alert('EL NÚMERO ES MÚLTIPLO DE 5');
  }
}