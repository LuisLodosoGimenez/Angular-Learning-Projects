import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-europa',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './europa.component.html',
  styleUrl: './europa.component.css'
})
export class EuropaComponent {

}