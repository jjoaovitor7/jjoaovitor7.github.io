import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router, Event, RouterOutlet } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { NavComponent } from './components/nav/nav.component';
import { LoaderComponent } from './components/loader/loader.component';
import * as AOS from 'aos';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, LoaderComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  states: string[] = ["about", "education", "projects", "work"];

  currentState = 0;
  currentSection = this.states[0];

  router: Router = new Router();
  @ViewChild('container') container!: ElementRef;

  constructor() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    setTimeout(() => {
      const isBottom = (window.innerHeight + window.scrollY >= document.body.offsetHeight);
      const isTop = window.scrollY == 0;

      if (isBottom) {
        this.currentState += 1;

        switch (this.currentSection) {
          case "about":
            this.currentSection = "education";
            this.router.navigateByUrl(this.currentSection);
            window.scrollTo(0, 10);
            break;
          case "education":
            this.currentSection = "work";
            this.router.navigateByUrl(this.currentSection);
            window.scrollTo(0, 10);
            break;
          case "work":
            this.currentSection = "projects";
            this.router.navigateByUrl(this.currentSection);
            window.scrollTo(0, 10);
            break;
        }
      }

      if (isTop) {
        this.currentState -= 1;

        switch (this.currentSection) {
          case "projects":
            this.currentSection = "work";
            this.router.navigateByUrl(this.currentSection);
            window.scrollTo(0, 10);
            break;
          case "work":
            this.currentSection = "education";
            this.router.navigateByUrl(this.currentSection);
            window.scrollTo(0, 10);
            break;
          case "education":
            this.currentSection = "about";
            this.router.navigateByUrl(this.currentSection);
            window.scrollTo(0, 10);
            break;
        }
      }
    }, 164)
  };

  ngOnInit(): void {
    const containerLoader = document.getElementById("container-loader");

    if (containerLoader != null) {
      containerLoader.style.opacity = "0";
      containerLoader.addEventListener("transitionend", () => {
        containerLoader.remove();
      });
    };

    AOS.init();
    window.addEventListener('load', AOS.refresh);

    const setParticleJS = () => {
      particlesJS.load('main', 'particles.json', function () {
        console.log('%ccallback - particles.js config loaded', 'color: #4af626;');
      });
    }

    setParticleJS();

    window.onresize = function () {
      setParticleJS();
    }
  }
}