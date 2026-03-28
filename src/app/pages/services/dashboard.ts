import { Injectable, signal } from '@angular/core';
import { Widget } from '../../models/dashboard';
import { WheelComponent } from '../dashboard/widgets/wheel/wheel.component';
import { ViewsComponent } from '../dashboard/widgets/views/views';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Wheel',
      content: WheelComponent,
    },
    {
      id: 2,
      label: 'Views',
      content: ViewsComponent,
    },
  ]);

  constructor() {}
}
