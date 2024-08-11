import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NgIf]
})
export class AppComponent implements OnInit, OnDestroy {
  connected!: boolean;

  ngOnInit(): void {
    this.connected = navigator.onLine;
    window.addEventListener('offline', () => this.connected = false);
    window.addEventListener('online', () => this.connected = true);
  }

  ngOnDestroy(): void {
      window.removeEventListener('offline', () => {});
      window.removeEventListener('online', () => {});
  }
}
