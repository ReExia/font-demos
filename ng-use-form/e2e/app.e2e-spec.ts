import { WayToFormPage } from './app.po';

describe('way-to-form App', () => {
  let page: WayToFormPage;

  beforeEach(() => {
    page = new WayToFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
