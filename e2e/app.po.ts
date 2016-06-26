export class Ng2IframeIntegrationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-iframe-integration-app h1')).getText();
  }
}
