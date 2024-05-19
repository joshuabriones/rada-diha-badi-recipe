"use client";
import { useState } from "react";
import axios from "axios";
import Header from "./_components/Header";
import Main from "./_components/Main";
import Results from "./_components/Results";

const Home = () => {
  const [recipe, setRecipe] = useState("");
  const [generating, setGenerating] = useState(false);

  const getRecipe = async (event) => {
    event.preventDefault();
    const apiKey = "fc033e4428deacf92tb6o5f960d83508";
    const instructions = event.target.instructions.value;
    const prompt = `Provide me with any recipe that contain the following: ${instructions}`;
    const context =
      "devide text in two parts/paragraphs: ingredients and instructions,  add an emoticon of the dish, include <br/> <br/> before instructions";
    const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    setGenerating(true);

    try {
      const response = await axios.get(apiUrl);
      setRecipe(response.data.answer);
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setRecipe("Error generating recipe.");
    } finally {
      setGenerating(false);
    }
  };

  console.log(recipe);

  return (
    <>
      <Header />
      <Main getRecipe={getRecipe} recipe={recipe} generating={generating} />
      <Results generating={generating} recipe={recipe} />

      {/* <main>
        <div className="text-center mt-8">
          <form onSubmit={getRecipe} id="recipes-generator-form">
            <input
              type="text"
              placeholder="Type the ingredients..."
              autoFocus
              required
              className="p-2"
              id="user-instructions"
              name="instructions"
            />
            <input type="submit" className="py-2 px-4 text-lg mt-4" />
          </form>
          <div className="mt-4 text-gray-500">i.e: Tofu, Fish or Chocolate</div>
        </div>

       
      </main> */}
    </>
  );
};

export default Home;
