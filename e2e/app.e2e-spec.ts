import { AttendyuiPage } from './app.po';

describe('attendyui App', () => {
  let page: AttendyuiPage;

  beforeEach(() => {
    page = new AttendyuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
