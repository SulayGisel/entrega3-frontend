import { NavVisibilityService } from './../nav-visibility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partido',
  standalone: true,
  imports: [],
  templateUrl: './partido.component.html',
  styleUrl: './partido.component.css'
})
export class PartidoComponent implements OnInit {

  constructor(private NavVisibilityService: NavVisibilityService) {}

  ngOnInit(): void {
    this.NavVisibilityService.showNav();
  }

}
