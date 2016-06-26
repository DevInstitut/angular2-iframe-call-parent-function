import { Ng2IframeIntegrationPage } from './app.po';

describe('ng2-iframe-integration App', function() {
  let page: Ng2IframeIntegrationPage;

  beforeEach(() => {
    page = new Ng2IframeIntegrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-iframe-integration works!');
  });
});
