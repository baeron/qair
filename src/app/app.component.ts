import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  template: `
    <main class="app-root">
      <qair-header></qair-header>
        <router-outlet />
      <qair-footer></qair-footer>
    </main>`,
  styles: [`
    .app-root {
      min-width: 30rem;
    }
  `]
})
export class AppComponent { }
