"use client";
import { useState } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";

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

  return (
    <div className="max-w-[800px] my-0 mx-auto p-4">
      <header>
        <h1>
          <span className="">Welcome to:</span>
          <br />
          <span className="">AI recipes generator</span>
        </h1>
      </header>
      <main>
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

        {generating ? (
          <div className="mt-8">
            <span className="text-orange-400">⏳</span> Generating a recipe that
            includes {recipe}..
          </div>
        ) : (
          recipe && (
            <div className="mt-8" id="recipe">
              <Typewriter
                options={{
                  strings: recipe,
                  autoStart: true,
                  delay: 10,
                }}
              />
            </div>
          )
        )}
      </main>
      <footer>FOOTER NI MGA BADI</footer>
    </div>
  );
};

export default Home;
