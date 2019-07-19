import { Injectable } from '@angular/core';
import {UthClass} from '../models/uth-class';

@Injectable({
  providedIn: 'root'
})
export class UthClassService {

  constructor() { }

  public findByName(uthClassName: string): UthClass {
    let result: UthClass;
    result = new UthClass();
    result.name = uthClassName;
    result.usefulStat = ['STR', 'CON', 'DEX', 'QUI'];
    result.availableRace = ['Avalonian', 'Briton', 'Highlander', 'Inconnu', 'Saracen'];
    return result;
  }
}
