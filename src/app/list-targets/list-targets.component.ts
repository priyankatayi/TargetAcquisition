import { Component, OnInit } from '@angular/core';
import { Target } from '../models/target.model';
import { TargetsService } from '../targets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-targets',
  templateUrl: './list-targets.component.html',
  styleUrls: ['./list-targets.component.css']
})
export class ListTargetsComponent implements OnInit {
  targetData: Target[];
  id: number;
  errorMsg: string =  "There is no target data available, please create a target.";

  constructor(private targetService: TargetsService, private router: Router) { }

  ngOnInit() {
    this.targetService.getListOfTargets().subscribe(data => {
      this.targetData = data;
      console.log(this.targetData);
    });
  }
  //updating the view when a target is deleted
  deletedTarget(id: number) {
    const i = this.targetData.findIndex(t => t.id === id);
    if (i !== -1) {
      this.targetData.splice(i, 1);
    }
  }
}

