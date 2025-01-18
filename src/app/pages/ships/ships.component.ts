import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-ships',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './ships.component.html',
  styleUrl: './ships.component.css',
})
export class ShipsComponent {}
