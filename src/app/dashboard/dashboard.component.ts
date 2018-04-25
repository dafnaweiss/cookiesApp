import { Component, OnInit } from '@angular/core';

import { Outpost } from '../Outpost';
import { OutpostService} from '../outpost.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardTitle = 'The TOP 4 most active Outposts are:';
  outposts: Outpost[] = [];

  // inject the outpost service and create a service singleton
  constructor(private outpostService: OutpostService) { }

  // the first action to is to get the list of the outpost from the database
  ngOnInit() {
    this.getOutposts();
  }

  // call the service to GET the TOP 4 outposts from the list of the outposts in the database
  getOutposts(): void {
    /*this.outpostService.getOutposts().subscribe(outposts => this.outposts = outposts.slice(1, 5));*/
    this.outpostService.getOutposts().subscribe(outposts =>
      this.outposts = outposts.sort((leftOutpost, rightOutpost): number => {
                      if (leftOutpost.numberOfCookiesLeft < rightOutpost.numberOfCookiesLeft) { return -1; }
                      if (leftOutpost.numberOfCookiesLeft > rightOutpost.numberOfCookiesLeft) { return 1; }
                      return 0;
                      }).slice(1, 5));
  }

}
