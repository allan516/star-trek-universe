import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-civilizations',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './civilizations.component.html',
  styleUrl: './civilizations.component.css',
})
export class CivilizationsComponent {}
