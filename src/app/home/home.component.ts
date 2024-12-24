import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CalendarModule ,FormsModule ,DividerModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  date: Date | null = null
  date1: Date | null = null
  date3: Date | null = null
  value: string | null = null
  value1: string | null = null
}
