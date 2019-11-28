describe('Default UI', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render an add button for adding todo items', async () => {
    await expect(element(by.id('addToDo'))).toBeVisible();
  });

  it('should render two default ToDo items', async () => {
    await expect(element(by.id('ToDoItem')).length).toBe(2);
  });

  it('each todo item should render a DELETE button', async () => {
    await expect(
      element(by.id('ToDoItem').withDescendant(by.id('Delete-Button'))),
    ).toBeVisible();
  });
});
