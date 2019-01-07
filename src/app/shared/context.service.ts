import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ContextService {
  public moduleTitle: Subject<string> = new Subject<string>();
}
