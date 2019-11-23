describe('<App />', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render without crashing', async () => {
    await expect(element(by.id('mainApp'))).toBeVisible();
  });
});
