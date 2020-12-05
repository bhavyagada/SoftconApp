import { RackService } from 'src/app/rack.service';
import Rack from 'src/app/models/rack';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-rack',
  templateUrl: './edit-rack.component.html',
  styleUrls: ['./edit-rack.component.css']
})
export class EditRackComponent implements OnInit {

  racks: Rack[] = []

  constructor(
    private rackService: RackService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  editRack(rack: Rack, code: number, desc: string, capacity: number, isdefault: string, inactive: string) {
    this.rackService.editRack(rack._id, code, desc, capacity, isdefault, inactive)
      .subscribe((rack: Rack) => this.router.navigate(['racks', rack._id]))
  }
}
