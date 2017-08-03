import { BetssonGroupPage } from './app.po';

describe('betsson-group App', () => {
  let page: BetssonGroupPage;

  beforeEach(() => {
    page = new BetssonGroupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
