import { SidenavbarPage } from './app.po';

describe('sidenavbar App', function() {
  let page: SidenavbarPage;

  beforeEach(() => {
    page = new SidenavbarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
