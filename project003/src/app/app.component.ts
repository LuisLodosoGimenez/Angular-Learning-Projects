import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CronometroComponent } from './cronometro/cronometro.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CronometroComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje='';

  actualizar(t:number) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}