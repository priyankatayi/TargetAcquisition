import { Component, OnInit } from '@angular/core';
import { Target } from '../models/target.model';
import { TargetsService } from '../targets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-target',
  templateUrl: './create-target.component.html',
  styleUrls: ['./create-target.component.css']
})
export class CreateTargetComponent implements OnInit {
  target: Target;
  public targetForm: NgForm;
  panelTitle: string;
  id: number;
  statusValues = [{ id: 1, name: 'Open' }, { id: 2, name: 'Researching' }, { id: 3, name: 'Closed' }];
  constructor(private targetService: TargetsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.id = +data.get('id');
      console.log('actiavted data', data);
    });
    if (this.id === 0) {
      this.panelTitle = 'Create a Target';
      this.target = {
        id: null,
        name: null,
        status: '' + this.statusValues[0].id,
        description: null,
        keyContact: null,
        phoneNumber: null,
        email: null,
        revenue: null
      };
    } else {
      this.panelTitle = 'Edit Target';
      this.targetService.getSingleTarget(this.id).subscribe(
        (data) => this.target = data,
        (err: any) => console.log(err)
      );
    }
  }
  saveTarget(): void {
    if (this.id === 0) {
      this.targetService.addTarget(this.target).subscribe((data: Target) => {
        console.log('saveTarget', data);
        this.router.navigate(['list']);
      },
        (error: any) => console.log(error)
      );
    } else {
      this.targetService.updateTarget(this.target).subscribe((data: Target) => {
        console.log('saveTarget', data);
        this.router.navigate(['list']);
      }, (error: any) => console.log(error)
      );
    }

  }
}

