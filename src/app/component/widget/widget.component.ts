import { Component, input, signal } from '@angular/core';
import { Widget } from '../../models/dashboard';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgComponentOutlet } from '@angular/common';
import { WidgetOptionsComponent } from './widget-options/widget-options';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [MatIcon, MatButtonModule, NgComponentOutlet, WidgetOptionsComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
})
export class WidgetComponent {
  data = input.required<Widget>();

  showOptions = signal(false)
}
