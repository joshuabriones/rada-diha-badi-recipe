import Typewriter from "typewriter-effect";

const Results = ({ generating, recipe }) => {
  return (
    <div className="w-full mt-10 px-[10%]">
      {generating ? (
        <div className="flex gap-2 italic font-medium text-orange-500 text-lg">
          <div className="animate-spin">🍔</div>
          Please wait while we are generating your recipe...
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
    </div>
  );
};

export default Results;
