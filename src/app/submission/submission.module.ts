import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSubmissionComponent } from './search-submission/search-submission.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { SubmissionRoutingModule } from './submission-routing.module';

@NgModule({
  declarations: [
    SearchSubmissionComponent,
    VendorDetailsComponent,
    ContractDetailsComponent
  ],
  imports: [
    CommonModule,
    SubmissionRoutingModule
  ],
  
})
export class SubmissionModule { }
