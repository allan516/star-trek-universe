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
      state('scrolled', style({ opacity: 0, transform: 'translateX(1000px)' })),
      transition('notScrolled <=> scrolled', [animate('0.8s ease-in-out')]),
    ]),

    trigger('shipScrollControl', [
      state(
        'shipScrolled',
        style({ opacity: 0, transform: 'translateX(600px)', position: 'fixed' })
      ),
      state('notShipScrolled', style({ position: 'fixed' })),
      transition('notShipScrolled <=> shipScrolled', [
        animate('0.04s ease-in-out'),
      ]),
    ]),

    trigger('paragraphScrollControl', [
      state('paragraphScrolled', style({ opacity: 1 })),
      state('notParagraphScrolled', style({ opacity: 0 })),
      transition('notParagraphScrolled => paragraphScrolled', [
        animate('1.5s ease-in-out'),
      ]),

      transition('paragraphScrolled => notParagraphScrolled', [animate('0s')]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home-media.component.css'],
})
export class HomeComponent {
  scrollState: string = 'notScrolled';
  shipScrollState: string = 'notShipScrolled';
  paragraphScrollControl: string = 'notParagraphScrolled';

  // Usar HostListener para escutar o evento de scroll
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;

    if (scrollPercentage > 10) {
      // Defina a posição do scroll que irá acionar a animação
      this.scrollState = 'scrolled'; // Ativa o estado "scrolled" quando o scroll passa de 10px
    } else {
      this.scrollState = 'notScrolled'; // Retorna ao estado "notScrolled"
    }

    if (scrollPercentage > 50) {
      // Defina a posição do scroll que irá acionar a animação
      this.shipScrollState = 'shipScrolled'; // Ativa o estado "scrolled" quando o scroll passa de 1000px
    } else {
      this.shipScrollState = 'notShipScrolled'; // Retorna ao estado "notScrolled"
    }

    if (scrollPercentage > 70) {
      this.paragraphScrollControl = 'paragraphScrolled';
    } else {
      this.paragraphScrollControl = 'notParagraphScrolled';
    }
  }
}
