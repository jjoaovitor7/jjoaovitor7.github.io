import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})

export class LoaderComponent implements OnInit {
  ngOnInit(): void {
    const containerLoader = document.getElementById("container-loader");

    if (containerLoader) {
      setTimeout(() => {
        containerLoader.style.opacity = "0";
      }, 256);

      setTimeout(() => {
        containerLoader?.parentElement?.remove();
      }, 2000);
    };
  }
}