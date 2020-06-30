import {NgModule} from '@angular/core';

import {OpenprojectCommonModule} from 'core-app/modules/common/openproject-common.module';
import {EmailCommunicationComponent} from "core-app/modules/email_communication/email_communication.component";

@NgModule({
  imports: [
    OpenprojectCommonModule,
  ],
  declarations: [
    EmailCommunicationComponent,
  ],
  exports: [
    EmailCommunicationComponent,
  ]
})
export class OpenprojectAttachmentsModule {
}
