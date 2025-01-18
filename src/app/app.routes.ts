import { Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { ShipsComponent } from './pages/ships/ships.component';
import { CivilizationsComponent } from './pages/civilizations/civilizations.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'ships', component: ShipsComponent },
  { path: 'civilizations', component: CivilizationsComponent },
];
