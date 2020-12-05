import { RackService } from 'src/app/rack.service';
import { Component, OnInit } from '@angular/core';
import Rack from 'src/app/models/rack';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-rack-view',
  templateUrl: './rack-view.component.html',
  styleUrls: ['./rack-view.component.css']
})
export class RackViewComponent implements OnInit {
  
  racks: Rack[] = []
  code: any;

  constructor(
    private rackService: RackService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.rackService.getRacks().subscribe(racks => this.racks = racks as any)
  }

  deleteRack(rack: Rack) {
    this.rackService.deleteRack(rack._id).subscribe((rack: Rack) => this.racks = this.racks.filter(r => r._id != rack._id))
  }

  search() { 
    if(this.code == '') {
      this.ngOnInit()
    } 
    else {
      this.racks = this.racks.filter(res => {
        return res.code?.toLocaleString().match(this.code)
      })
    }
  }
}
