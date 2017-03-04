import { Src.Kornicameister.Github.IoPage } from './app.po';

describe('src.kornicameister.github.io App', () => {
  let page: Src.Kornicameister.Github.IoPage;

  beforeEach(() => {
    page = new Src.Kornicameister.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
