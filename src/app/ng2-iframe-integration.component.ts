import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ng2-iframe-integration-app',
  templateUrl: 'ng2-iframe-integration.component.html',
  styleUrls: ['ng2-iframe-integration.component.css']
})
export class Ng2IframeIntegrationAppComponent {
  title = 'ng2-iframe-integration works!';

  callParentFunction() {
    // solution 1 - sans typage
    window.parent['fireFromInside']('hello from angular app');

    // solution 2 - avec typage
    window.parent.fireFromInside('hello from angular typed');
  }
}
