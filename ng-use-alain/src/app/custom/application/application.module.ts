import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../../shared/shared.module';
import { ApplicationService } from './application.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ApplicationRoutingModule
  ],
  declarations: [ListComponent],
  providers: [ApplicationService]
})
export class ApplicationModule { }
