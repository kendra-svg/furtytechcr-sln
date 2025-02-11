import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent implements OnInit {
  collapsed = true;

  constructor() { }

  ngOnInit() { }

}
