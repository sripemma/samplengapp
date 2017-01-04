import { SamplengappPage } from './app.po';

describe('samplengapp App', function() {
  let page: SamplengappPage;

  beforeEach(() => {
    page = new SamplengappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
