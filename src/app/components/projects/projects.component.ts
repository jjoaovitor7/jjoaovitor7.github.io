import { Component } from '@angular/core';
import { CardProjectComponent } from '../card-project/card-project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
