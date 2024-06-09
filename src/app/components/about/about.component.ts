import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    const blocks = document.querySelectorAll("#about .block");
    blocks.forEach((i, idx) => {
      setTimeout(() => {
        i.classList.add("active");
      }, idx * 800 + 512);
    });
  }
}
