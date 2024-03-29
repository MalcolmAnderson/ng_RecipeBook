import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected: EventEmitter<string> = new EventEmitter<string>();
  collapsed: boolean;

  constructor() {
    this.collapsed = true;
  }

  ngOnInit(): void {
  }

  onSelect(feature: string): void {
    console.log('onSelect - feature = ' + feature );
    this.featureSelected.emit(feature);
  }

}
