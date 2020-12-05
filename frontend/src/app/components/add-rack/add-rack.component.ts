import Rack from 'src/app/models/rack';
import { RackService } from 'src/app/rack.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rack',
  templateUrl: './add-rack.component.html',
  styleUrls: ['./add-rack.component.css']
})
export class AddRackComponent implements OnInit {

  constructor(
    private rackService: RackService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createRack(code: number, desc: string, capacity: number, isdefault: string, inactive: string) {
    this.rackService.createRack(code, desc, capacity, isdefault, inactive)
      .subscribe((rack: Rack) => this.router.navigate(['racks', rack._id]))
  }
}
