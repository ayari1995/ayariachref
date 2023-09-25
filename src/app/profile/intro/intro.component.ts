import { Component, ElementRef, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  cvUrl: any
  constructor(private profileService:ProfileService,
    private el: ElementRef) { }

  ngOnInit() {

    this.cvUrl =  this.profileService.resumeurl
 
 
    const typedElement = this.el.nativeElement.querySelector('.typed');

    if (typedElement) {
      const typedStrings = typedElement.getAttribute('data-typed-items');
      if (typedStrings) {
        const strings = typedStrings.split(',');

        new Typed(typedElement, {
          strings: strings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      }
    }
  }

  }
  


