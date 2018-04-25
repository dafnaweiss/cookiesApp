import {Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Outpost} from '../Outpost';
import {OutpostService} from '../outpost.service';

@Component({
  selector: 'app-outpost-details',
  templateUrl: './outpost-details.component.html',
  styleUrls: ['./outpost-details.component.css']
})

export class OutpostDetailsComponent implements OnInit {

  // define a default empty outpost with id=0

  @Input()
  outpost: Outpost;

  // inject the outpost service, location and the activate route and create a singleton of each of them
  constructor(private route: ActivatedRoute,
              private location: Location,
              private outpostService: OutpostService) {
  }

  // the first action is to get the details of the chosen outpost
  ngOnInit() {
    this.getOutpost();
  }

  getOutpost(): void {
    // get the id of the chosen outpost
    const id = +this.route.snapshot.paramMap.get('id');
    this.outpostService.getOutpost(id).subscribe(outpost => this.outpost = outpost);
  }

  // save the current Outpost in the database
  save(): void {
    this.outpostService.updateOutpost(this.outpost).subscribe(() => this.goBack());
  }

  // go back to the previous page(view)
  goBack(): void {
    this.location.back();
  }

}
