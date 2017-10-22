import { GestionEndroitPage } from './app.po';

describe('gestion-endroit App', function() {
  let page: GestionEndroitPage;

  beforeEach(() => {
    page = new GestionEndroitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
