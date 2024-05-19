import Image from "next/image";

const Main = ({ getRecipe, recipe, generating }) => {
  return (
    <main className="w-full mt-14">
      <div className="flex justify-between px-[10%]">
        <div className="">
          <p className="text-lg text-green-500 font-bold">RADA DIHA BADI</p>
          <h1 className="text-7xl font-bold">
            Generate recipe <br />
            in seconds
          </h1>
          <p className="text-xl mt-2">
            We can handle a wide variety of ingredients, including meats,
            vegetables, grains, dairy products, and even leftovers. Just type in
            your ingredients and we'll generate a recipe for you.
          </p>
          <form
            onSubmit={getRecipe}
            id="recipes-generator-form"
            className="flex gap-4 items-center justify-center mt-10"
          >
            <input
              type="text"
              placeholder="e.g:  Fish, Salt, Pepper, etc."
              autoFocus
              required
              className="p-4 rounded-lg border-2 border-green-500 w-full"
              id="user-instructions"
              name="instructions"
            />
            <input
              type="submit"
              className="text-lg text-white bg-green-500 h-full p-4 rounded-lg cursor-pointer hover:bg-green-600"
            />
          </form>
        </div>
        <Image
          src="/bg-hero.png"
          alt="Picture of the author"
          width={500}
          height={500}
          className=""
        />
      </div>
    </main>
  );
};

export default Main;
