import { Routes } from '@angular/router';
import { TablanroComponent } from './tablanro/tablanro.component';

export const routes: Routes = [{
  path: "tabla/:nro/:terminos",
  component: TablanroComponent
}];