import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, DashboardComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kanban';
}