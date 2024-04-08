import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SelectornumericoComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('selector3') selector3!: SelectornumericoComponent;
  @ViewChild('selector4') selector4!: SelectornumericoComponent;
  
  myNumberInput2: FormControl = new FormControl('');
  myNumberInput4: FormControl = new FormControl('');

  fijarSelector3(valor:number) {
    this.selector3.fijar(valor);
  }

  fijarSelector4(valor:number) {
    this.selector4.fijar(valor);
  }


}