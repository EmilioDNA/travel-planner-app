
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../media', false, /\.(png|jpe?g|svg)$/));
// import images from '../media'




// This method creates the card with the information about the diverse topics.
const createTravelCard =  async (days, city, country, high, low, description, icon, imgURL) => {
    const list = document.getElementById('travel-planner-list'); // Get the travel list
    // Create a string with the card's html format
    const card = ` 
        <div class="card">
            <figure>
                <img id="travel-img" src="${imgURL}" alt="">
            </figure>
            <div class="card-body">
                <h2><span id="city">${city}</span>, <span id="country">${country}</span> is <span id="days">${days}</span> days away</h2>
                <span>
                    <button class="card-button" onclick="Client.handleClick(event)">Save trip</button>
                </span>
                <p>Typical weather for then is:</p>
                <span>High - <span id="high">${high}</span> | Low - <span id="low">${low}</span></span> 
                <span class="weather-description">
                    <p id="description">${description}.</p>
                    <img class="img-icon" src="${images[`${icon}.png`].default}">
                </span>
            </div>
        </div>`;
        console.log(images['a01d.png'].default);
    // Convert the string to a DOM fragment to append to the travel list
    const fragment = document.createRange().createContextualFragment(card);
    list.appendChild(fragment);
}

// This function takes the list of cards and remove the children.
const cleanResults = () => {
    const results = document.getElementById('travel-planner-list'); // Get the travel list.
    while (results.firstChild) {
        console.log("Cleaning children");
        results.removeChild(results.firstChild);
    }

}
// Export functions
export { createTravelCard, cleanResults } 