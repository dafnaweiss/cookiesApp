import { Component, OnInit } from '@angular/core';

import { Outpost } from '../Outpost';
import { OutpostService } from '../outpost.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-outposts',
  templateUrl: './outposts.component.html',
  styleUrls: ['./outposts.component.css']
})
export class OutpostsComponent implements OnInit {

  listTitle = 'List of all the Outposts:';
  outposts: Outpost[];

  // inject the outpost service and create a service singleton
  constructor(private outpostService: OutpostService) { }

  // the first action is to get the list of the outpost from the database
  ngOnInit() {
    this.getOutposts();
  }

  // call the service to GET the list of the outposts from the database
  getOutposts(): void {
    this.outpostService.getOutposts().subscribe(outposts => this.outposts = outposts);
  }

  // ADD a new outpost
  add(name: string): void {
    name = name.trim();

    if (!name) { return; }

    // add the new outpost by its name and go to its detail page
    this.outpostService.addOutpost({name} as Outpost).subscribe(outpost => {
      this.outposts.push(outpost);
    });
  }

  // DELETE an outpost from the outposts list
  delete(outpost: Outpost): void {
    // return a new array without the giving outpost
    this.outposts = this.outposts.filter( op => op !== outpost);
    // delete the outpost from the database
    this.outpostService.deleteOutpost(outpost).subscribe();
  }

}
