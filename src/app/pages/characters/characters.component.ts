import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { StarTrekService } from '../../star-trek.service';
import { CommonModule } from '@angular/common';
import { Characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements OnInit {
  characters: Characters[] = [];
  constructor(private starTrekService: StarTrekService) {}

  ngOnInit() {
    return this.starTrekService.getCharacters().subscribe((response) => {
      this.characters = response;
    });
  }
}
