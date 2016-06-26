import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2IframeIntegrationAppComponent } from '../app/ng2-iframe-integration.component';

beforeEachProviders(() => [Ng2IframeIntegrationAppComponent]);

describe('App: Ng2IframeIntegration', () => {
  it('should create the app',
      inject([Ng2IframeIntegrationAppComponent], (app: Ng2IframeIntegrationAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-iframe-integration works!\'',
      inject([Ng2IframeIntegrationAppComponent], (app: Ng2IframeIntegrationAppComponent) => {
    expect(app.title).toEqual('ng2-iframe-integration works!');
  }));
});
