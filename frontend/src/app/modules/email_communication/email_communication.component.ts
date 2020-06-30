import {Component, ElementRef, Input, OnInit} from "@angular/core";
import {UntilDestroyedMixin} from "core-app/helpers/angular/until-destroyed.mixin";
import {HalResource} from "core-app/modules/hal/resources/hal-resource";
import {I18nService} from "core-app/modules/common/i18n/i18n.service";
import {States} from "core-components/states.service";
import {HalResourceService} from "core-app/modules/hal/services/hal-resource.service";

@Component({
  selector: 'emailSelector',
  templateUrl: './emailCommunication.html'
})
export class EmailCommunicationComponent extends UntilDestroyedMixin implements OnInit {
  @Input('resource') public resource:HalResource;

  public $element:JQuery;
  public allowUploading:boolean;
  public destroyImmediately:boolean;
  public text:any;

  constructor(protected elementRef:ElementRef,
              protected I18n:I18nService,
              protected states:States,
              protected halResourceService:HalResourceService) {
    super();

    this.text = {
      attachments: this.I18n.t('js.label_attachments'),
    };
  }

  ngOnInit() {
    this.$element = jQuery(this.elementRef.nativeElement);

    if (!this.resource) {
      // Parse the resource if any exists
      const source = this.$element.data('resource');
      this.resource = this.halResourceService.createHalResource(source, true);
    }

    this.allowUploading = this.$element.data('allow-uploading');

    if (this.$element.data('destroy-immediately') !== undefined) {
      this.destroyImmediately = this.$element.data('destroy-immediately');
    } else {
      this.destroyImmediately = true;
    }

    this.setupResourceUpdateListener();
  }
}