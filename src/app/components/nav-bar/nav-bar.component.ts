import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
  windowWidth: boolean = false;

  @HostListener('window:resize', [])
  onResize(): void {
    if (window.innerWidth > 840) {
      this.windowWidth = true;
    }
  }

  toggleMenu() {
    if (window.innerWidth < 840) this.toggle = !this.toggle;
  }
}
