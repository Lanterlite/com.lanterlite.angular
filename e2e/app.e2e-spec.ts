import { Com.Lanterlite.AngularPage } from './app.po';

describe('com.lanterlite.angular App', () => {
  let page: Com.Lanterlite.AngularPage;

  beforeEach(() => {
    page = new Com.Lanterlite.AngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
