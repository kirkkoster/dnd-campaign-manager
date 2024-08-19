import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  constructor(meta: Meta, title: Title) {
    title.setTitle('D&D Campaign Manager');
    meta.addTags([
      { name: 'description', content: 'Manage your D&D campaigns with ease using our advanced tools.' },
      { name: 'keywords', content: 'D&D, Dungeon Master, campaign manager, encounter generator' }
    ]);
  }
}
