import { CommonModule } from '@angular/common';
import { NavVisibilityService } from './nav-visibility.service';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Asegúrate de importar withFetch


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apuestaConnect';

  isVisible: boolean = true;

  constructor(private NavVisibilityService: NavVisibilityService, 
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.NavVisibilityService.navVisibility$.subscribe(visible => {
      this.isVisible = visible;
      this.cdRef.detectChanges();
    });
  }
}
