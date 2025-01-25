import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Ship } from '../../interfaces/ships.interface';
import { StarTrekService } from '../../star-trek.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ships',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './ships.component.html',
  styleUrl: './ships.component.css',
})
export class ShipsComponent {
  ships!: Ship;
  id!: number;

  constructor(private starTrekService: StarTrekService) {}

  getShipById() {
    this.starTrekService.getShipsById(this.id).subscribe((ships) => {
      this.ships = ships;
    });
  }
}
