import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Backend adatok:</h1>

    <div *ngIf="data.length === 0">
      Nincs adat...
    </div>

    <ul *ngIf="data.length > 0">
      <li *ngFor="let item of data">
        {{ item.date }} - {{ item.temperatureC }}°C
      </li>
    </ul>
  `
})
export class App implements OnInit {
  data: any[] = [];

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit lefutott');

    this.api.getWeather().subscribe({
      next: (result) => {
        console.log('Backend válasz:', result);
        this.data = [...result];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Hiba:', err);
      }
    });
  }
}