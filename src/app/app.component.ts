import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule], // RouterOutlet is required for routing to work
  templateUrl: './app.component.html', // Use templateUrl for external HTML
  styleUrls: ['./app.component.css'],  // Correct usage for external CSS
})
export class AppComponent {}
