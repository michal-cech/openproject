//-- copyright
// OpenProject is an open source project management software.
// Copyright (C) 2012-2020 the OpenProject GmbH
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See docs/COPYRIGHT.rdoc for more details.
//++

import {ConfigurationService} from 'core-app/modules/common/config/configuration.service';
import {I18nService} from 'core-app/modules/common/i18n/i18n.service';
import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {HalResource} from 'core-app/modules/hal/resources/hal-resource';
import {HalResourceService} from 'core-app/modules/hal/services/hal-resource.service';
import {OnInit} from '@angular/core';
import {UploadFile} from "core-components/api/op-file-upload/op-file-upload.service";
import {NotificationsService} from "core-app/modules/common/notifications/notifications.service";

@Component({
  selector: 'external-email-sender',
  templateUrl: './external-email-sender.html'
})
export class ExternalEmailSender implements OnInit {
  @Input() public resource:HalResource;

  public text:any;
  public $element:JQuery;

  constructor(readonly I18n:I18nService,
              readonly ConfigurationService:ConfigurationService,
              readonly notificationsService:NotificationsService,
              protected elementRef:ElementRef,
              protected halResourceService:HalResourceService) {
    this.text = {
    };
  }

  ngOnInit() {
    this.$element = jQuery(this.elementRef.nativeElement);
  }

  sendEmail() {
    this.resource.sendEmail();
  }

}
