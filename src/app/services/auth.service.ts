import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // Ensures the service is available app-wide
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post('https://localhost:7137/api/Auth/login', data);
  }
}
