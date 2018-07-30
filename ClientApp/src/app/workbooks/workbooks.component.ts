import { Component, OnInit } from '@angular/core';
import { DriveItem } from '@microsoft/microsoft-graph-types';
import { Observable } from 'rxjs';
import { GraphService } from '../services/graph.service';

@Component({
  selector: 'app-workbooks',
  templateUrl: './workbooks.component.html',
})
export class WorkbooksComponent {
  public driveItems: Observable<DriveItem[]>;
  public columnsToDisplay = ['createdBy','createdDate','fileName'];
  constructor( private graphService: GraphService) { 
    this.driveItems = this.graphService.getRecentWorkbooks();
    this.driveItems.subscribe();
  }


}
