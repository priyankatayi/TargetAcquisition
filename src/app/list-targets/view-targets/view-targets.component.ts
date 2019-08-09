import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Target } from 'src/app/models/target.model';
import { TargetsService } from '../../targets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-targets',
  templateUrl: './view-targets.component.html',
  styleUrls: ['./view-targets.component.css']
})
export class ViewTargetsComponent implements OnInit {
  @Input()
  targetData: Target[];
  @Output()
  deletedTarget: EventEmitter<number> = new EventEmitter<number>();

  constructor(private targetService: TargetsService, private router: Router) { }

  ngOnInit() {
    console.log('data returned', this.targetData);
  }
  editTarget(id: number) {
    console.log('id', id);
    this.router.navigate(['/edit', id]);
  }
  deleteTarget(id: number) {
    this.targetService.deleteTarget(id).subscribe(() => {
      console.log('deleted', id),
      (err: any) => console.log(err);
    });
    this.deletedTarget.emit(id);
  }

}
