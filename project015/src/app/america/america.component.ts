import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-america',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './america.component.html',
  styleUrl: './america.component.css'
})
export class AmericaComponent {

}