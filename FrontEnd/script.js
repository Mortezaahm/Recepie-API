// Avsiktligt tomt för att studenterna ska implementera själva.

const recipesContainer = document.querySelector(".recipes");
const commentsContainer = document.querySelector(".comments");
const form = document.querySelector(".comment-form");

let selectedRecipeId = null;

// Get recipes from the backend and display them
async function fetchRecipes() {
  try {
    const response = await fetch("http://localhost:3000/api/recipes");
    const data = await response.json();

    const recipes = data.recipes || data;

    displayRecipes(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

// Display recipes in the UI
function displayRecipes(recipes) {
  recipesContainer.innerHTML = "";
  recipes.forEach((recipe) => {
    const article = document.createElement("article");
    article.classList.add("recipe");
    article.innerHTML = `
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
        `;
    article.addEventListener("click", () => {
      selectedRecipeId = recipe._id;
      fetchComments(selectedRecipeId);
    });
    recipesContainer.appendChild(article);
  });
}

// GET /comments/:recipeId
async function fetchComments(recipeId) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/comments/${recipeId}`,
    );
    const data = await response.json();

    const comments = data.comments || data;

    displayComments(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
}

// Render comments acording to HTML structure in index.html
function displayComments(comments) {
  commentsContainer.innerHTML = "";
  comments.forEach((comment) => {
    const li = document.createElement("li");
    li.classList.add("comment");
    li.innerHTML = `
            <p><strong>${comment.name}</strong>: ${comment.text}</p>
        `;
    commentsContainer.appendChild(li);
  });
}

// POST /comments
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nameInput = form.querySelector("input[name='name']");
  const textarea = form.querySelector("textarea[name='comment']");
  const author = nameInput.value.trim();
  const commentText = textarea.value.trim();

  if (!selectedRecipeId) {
    alert("Please select a recipe");
    return;
  }

  if (!commentText) {
    return;
  }

  try {
    await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipe_id: selectedRecipeId,
        text: commentText,
        name: author,
      }),
    });
    nameInput.value = "";
    textarea.value = "";
    fetchComments(selectedRecipeId);
  } catch (error) {
    console.error("Error submitting comment:", error);
  }
});

// Initial fetch of recipes when the page loads
fetchRecipes();
