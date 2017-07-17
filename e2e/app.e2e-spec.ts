import { SpaceshipRentalPage } from './app.po';

describe('spaceship-rental App', () => {
  let page: SpaceshipRentalPage;

  beforeEach(() => {
    page = new SpaceshipRentalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
