import { Component, HostListener } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent],
  animations: [
    trigger('scrollState', [
      state('notScrolled', style({ opacity: 1, transform: 'translateX(0)' })),
      state('scrolled', style({ opacity: 0, transform: 'translateX(600px)' })),
      transition('notScrolled <=> scrolled', [animate('0.8s ease-in-out')]),
    ]),

    trigger('shipScrollControl', [
      state('shipScrolled', style({ position: 'fixed' })),
      state('notShipScrolled', style({ position: 'fixed' })),
      transition('notShipScrolled <=> shipScrolled', [
        animate('0.8s ease-in-out'),
      ]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  scrollState: string = 'notScrolled';
  shipScrollState: string = 'notShipScrolled';

  // Usar HostListener para escutar o evento de scroll
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 50) {
      // Defina a posição do scroll que irá acionar a animação
      this.scrollState = 'scrolled'; // Ativa o estado "scrolled" quando o scroll passa de 200px
    } else {
      this.scrollState = 'notScrolled'; // Retorna ao estado "notScrolled"
    }

    if (scrollPosition > 100) {
      // Defina a posição do scroll que irá acionar a animação
      this.shipScrollState = 'shipScrolled'; // Ativa o estado "scrolled" quando o scroll passa de 200px
    } else {
      this.shipScrollState = 'notShipScrolled'; // Retorna ao estado "notScrolled"
    }
  }
}
