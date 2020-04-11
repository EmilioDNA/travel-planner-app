const {isValidURL} = require('./urlChecker');


test('test that "This is a text" is false', () => {
    expect(isValidURL("This is a test")).toBe(false);
});


test('test that "https://www.techspot.com/news/84674-app-spending-hits-record-levels-people-look-break.html" is true ', () => {
    expect(isValidURL("https://www.techspot.com/news/84674-app-spending-hits-record-levels-people-look-break.html")).toBe(true);
});


