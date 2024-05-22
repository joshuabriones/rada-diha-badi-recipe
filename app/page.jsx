"use client";
import axios from "axios";
import { useState } from "react";
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
    const prompt = `Provide me with a detailed recipe that contains the following ingredients: ${instructions}. Ensure to include precise measurements for each ingredient.`;
    const context =
      "Start with a title. Divide the text into two parts/paragraphs: ingredients and instructions. Title the ingredients section as 'Ingredients:' and list each ingredient in bullet form with a <br/> tag before each ingredient. Add an emoticon of the dish. Include <br/><br/> before the instructions. Number each step in the instructions and start each step with a <br/> tag before the number. Make the instructions detailed, with a tone and style similar to Gordon Ramsay, including exclamations and emphasis where appropriate. The AI should only accept food related and if it's not it will not give the recipe";
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
    </>
  );
};

export default Home;
