import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/components/sidebar/sidebar.component';

@Component({
  selector: 'app-indexnavbar',
  templateUrl: './indexnavbar.component.html',
  styleUrls: ['./indexnavbar.component.scss']
})
export class IndexnavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor() { }

  ngOnInit(){
  }

}
