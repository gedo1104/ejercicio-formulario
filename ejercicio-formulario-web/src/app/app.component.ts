import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { FormListComponent } from './form-list/form-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ejercicio-formulario-web';
}
