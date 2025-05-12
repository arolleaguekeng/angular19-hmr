import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'HMR Demo';
  counter = signal(0);
  name = '';

  increment() {
    this.counter.update((c) => c + 1);
  }

  decrement() {
    this.counter.update((c) => c - 1);
  }
}
