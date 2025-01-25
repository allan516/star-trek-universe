import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css', './nav-bar-media.component.css'],
})
export class NavBarComponent {
  toggle: boolean = false;

  toggleMenu() {
    if (window.innerWidth < 840) this.toggle = !this.toggle;
  }
}
