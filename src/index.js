const displayRamens = () => {
  fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((ramens) => {
      const ramenMenu = document.getElementById("ramen-menu");

      // Clear existing ramen images
      ramenMenu.innerHTML = "";

      // Add each ramen's image to the #ramen-menu div
      ramens.forEach((ramen) => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
      });
    })
    .catch((error) => console.error("Error fetching ramens:", error));
};

const handleClick = (ramen) => {
  const detailImage = document.querySelector(".detail-image");
  const name = document.querySelector(".name");
  const restaurant = document.querySelector(".restaurant");
  const rating = document.querySelector(".rating");
  const comment = document.querySelector(".comment");

  // Update the #ramen-detail div with the clicked ramen's details
  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  name.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  rating.textContent = ramen.rating;
  comment.textContent = ramen.comment;
};
  

const addSubmitListener = () => {
  const form = document.getElementById("new-ramen");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get form data
    const name = event.target.name.value;
    const restaurant = event.target.restaurant.value;
    const image = event.target.image.value;
    const rating = event.target.rating.value;
    const comment = event.target.comment.value;

    // Create a new ramen object
    const newRamen = { name, restaurant, image, rating, comment };

    // Add the new ramen's image to the #ramen-menu div
    const ramenMenu = document.getElementById("ramen-menu");
    const img = document.createElement("img");
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener("click", () => handleClick(newRamen));
    ramenMenu.appendChild(img);

    // Clear the form
    form.reset();
  });
};

const main = () => {
  displayRamens();
  addSubmitListener();
};

// Start the app after the DOM has loaded
document.addEventListener("DOMContentLoaded", main);

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
