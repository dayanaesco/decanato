import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCJBRJkQc-ybmBl3eFUqaeTwfS2nRiVC3A",
      authDomain: "decanatos.firebaseapp.com",
    })
  };

  constructor(private loginService: LoginService){}

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }
  
}