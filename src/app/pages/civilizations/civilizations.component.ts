import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Civilization } from '../../interfaces/civilization.interface';
import { StarTrekService } from '../../star-trek.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-civilizations',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './civilizations.component.html',
  styleUrl: './civilizations.component.css',
})
export class CivilizationsComponent {
  civilization!: Civilization;
  id!: number;
  constructor(private starTrekService: StarTrekService) {}

  getCivilization() {
    return this.starTrekService
      .getCivilizationById(this.id)
      .subscribe((civilization) => {
        this.civilization = civilization;
      });
  }
}
