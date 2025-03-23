import data from "/public/data/recipes.json";

function createCard(recipe) {
  const card = document.createElement("div");
  card.classList.add("recipe-card");

  const title = document.createElement("h2");
  title.innerHTML = recipe.title;

  const image = document.createElement("img");
  image.src = recipe.image;

  const description = document.createElement("p");
  description.innerHTML = recipe.description;

  const openButton = document.createElement("button");
  openButton.innerHTML = "Ver Receta";

  // Append elements to the card
  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(description);
  card.appendChild(openButton);

  return card;
}

function loadHighlightedRecipes() {
  const recipesDiv = document.getElementById("recipe-grid");

  data.recipes
    .filter((recipe) => recipe.highlighted)
    .forEach((recipe) => {
      const card = createCard(recipe);
      recipesDiv.appendChild(card);
    });
}

loadHighlightedRecipes();
