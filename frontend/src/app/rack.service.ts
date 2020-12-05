import { WebService } from './web.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RackService {

  constructor(private webService: WebService) { }

  getRacks() {
    return this.webService.get('racks')
  }

  getRack(rackId: string|undefined) {
    return this.webService.get(`racks/${rackId}`)
  }
  
  createRack(code: number, desc: string, capacity: number, isdefault: string, inactive: string) {
    return this.webService.post('racks', { code, desc, capacity, isdefault, inactive })
  }

  editRack(rackId: string|undefined, code: number, desc: string, capacity: number, isdefault: string, inactive: string) {
    return this.webService.put(`racks/${rackId}`, { code, desc, capacity, isdefault, inactive })
  }

  deleteRack(rackId: string|undefined) {
    return this.webService.delete(`racks/${rackId}`)
  }
}
