import { shake} from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';

export const clickShake = trigger('shake', [transition('1 => 2', useAnimation(shake))]);
