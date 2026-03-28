import { Component } from '@angular/core';
import { WidgetComponent } from "../../component/widget/widget.component";
import { Widget } from '../../models/dashboard';
import { WheelComponent } from './widgets/wheel/wheel.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  data: Widget = {
    id:1,
    label: 'Wheel',
    content: WheelComponent
  }
}
