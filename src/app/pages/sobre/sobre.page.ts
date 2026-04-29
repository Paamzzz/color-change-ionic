import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon, IonRange, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonRange, IonButton]
})
export class SobrePage implements OnInit {
     r : number = 0 ;
     g : number = 0 ;
     b : number = 0 ;

     colorChange(cor : string, event : any) {
          if (cor === "r") { // primeiro armazenamos o valos, depois mudamos em tempo real.
               this.r = event.detail.value;
          } else if (cor === 'g') {
               this.g = event.detail.value;
          } else {
               this.b = event.detail.value;
          }

          this.changeCircle();
     }

     changeCircle() {
          const circle = document.querySelector('#circle-preview');
          if (circle) {
              (circle as HTMLElement).style.backgroundColor = `rgb(${this.r},${this.g},${this.b})`;
          }
     }

     changeButton() {
          const button = document.querySelector('#btn-botao');
          if (button) {
               (button as HTMLElement).style.setProperty('--background', `rgb(${this.r},${this.g},${this.b})`);
          }
     }

     changeBackground() {
          const background = document.querySelector('.hero-area');
          if (background) {
               (background as HTMLElement).style.backgroundImage = `none`;
               (background as HTMLElement).style.backgroundColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
          }
     }

  constructor() {
     
   }

  ngOnInit() {
  }
}
