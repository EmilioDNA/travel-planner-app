const {cleanResults, addResults} = require('./updateUI');


test('test that "The data is cleaned', () => {
     // Set up our document body
    document.body.innerHTML =
    '<div id="results"></div>';
    const results = document.getElementById('results');
    const text = "This is part three of building API using Express, Sequelize, and Postgres. In part two, we built simple API endpoints to demonstrate CRUD operations in Sequelize.";
    addResults("negative", "subjective", text);
    cleanResults();
    expect(results.hasChildNodes()).toBe(false);
});



test('test that "The data is filled', () => {
    const results = document.getElementById('results');
    const text = "This is part three of building API using Express, Sequelize, and Postgres. In part two, we built simple API endpoints to demonstrate CRUD operations in Sequelize.";
    addResults("negative", "subjective", text)
    expect(results.hasChildNodes()).toBe(true);
});