import { Component, OnInit } from '@angular/core';
import { DriveItem } from '@microsoft/microsoft-graph-types';

import { GraphService } from '../services/graph.service';

@Component({
  selector: 'app-workbooks',
  templateUrl: './workbooks.component.html',
})
export class WorkbooksComponent {
  public driveItems: DriveItem[];
  public columnsToDisplay = ['createdBy','createdDate','lastModifiedDateTime','fileName'];
  constructor( private graphService: GraphService) { 
    this.graphService.getRecentWorkbooks().subscribe(driveItems => {this.driveItems = driveItems; console.log(driveItems)});
  }


}
