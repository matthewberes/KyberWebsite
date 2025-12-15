import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Tracks whether the mobile nav is open
  menuOpen = false;

  onLogoClick() {
    window.location.href = '/';
  }
}
