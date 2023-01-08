import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Payment form';
  name!: string;

  onNameChange(value: string) {
    this.name = value;
  }
}
