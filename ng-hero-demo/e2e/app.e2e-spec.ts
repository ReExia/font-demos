import { HeroDemoPage } from './app.po';

describe('hero-demo App', () => {
  let page: HeroDemoPage;

  beforeEach(() => {
    page = new HeroDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
