import { Component, inject } from '@angular/core';
import { WidgetComponent } from '../../component/widget/widget.component';
import { DashboardService } from '../services/dashboard';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WidgetComponent],
  providers: [DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  store = inject(DashboardService);
}
