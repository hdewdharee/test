import { Component } from '@angular/core';
import { SpeakersService } from './shared';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css'],
  providers: [SpeakersService]
})
export class SpeakersComponent {
  tabs = ['First'];
  selected = new FormControl(0);

  addTab() {
    this.tabs.push('New');
    this.selected.setValue(this.tabs.length - 1);
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
