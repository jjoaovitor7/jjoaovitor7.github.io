import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css'
})
export class CardProjectComponent {
  @Input() url!: string;
  @Input() name!: string;
  @Input() stack!: string;
}