import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: "pm-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  @Output() listFilterChange = new EventEmitter<string>();
  @Input() listFilter: string;

  

  constructor() {}

  ngOnInit() {}
}
