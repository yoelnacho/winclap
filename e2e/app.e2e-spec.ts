import { WinclapPage } from './app.po';

describe('winclap App', function() {
  let page: WinclapPage;

  beforeEach(() => {
    page = new WinclapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
