function Home() {
  return (
    <div className="text-center pt-24 p-10 bg-softBlue min-h-screen">
      <section className="text-center py-20 px-4 bg-white rounded-lg shadow-lg max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-darkGray">
          Welcome to Nova Cafe!
        </h1>
        <p className="text-lg text-black mt-4">
          We are a locally driven breakfast cafe located in the heart of
          historic downtown Bozeman. The Nova Cafe prides itself on a number of
          homemade recipes cooked in-house as well as a wide-ranging gluten-free
          and vegan-friendly menu. We look to create an open, fun, and inviting
          environment for your dining experience!
        </p>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-4xl font-semibold text-darkGray">
          Menu Categories
        </h2>
        <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
          <div className="bg-white text-darkGray p-6 rounded-lg shadow-md">
            Appetizers
          </div>
          <div className="bg-white text-darkGray p-6 rounded-lg shadow-md">
            Entrees
          </div>
          <div className="bg-white text-darkGray p-6 rounded-lg shadow-md">
            Desserts
          </div>
          <div className="bg-white text-darkGray p-6 rounded-lg shadow-md">
            Drinks
          </div>
          <div className="bg-white text-darkGray p-6 rounded-lg shadow-md">
            Specials
          </div>
          <div className="bg-white text-darkGray p-6 rounded-lg shadow-md">
            Deals
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-4xl font-semibold text-darkGray">
          Trending Dishes
        </h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white text-darkGray p-6 rounded-lg shadow-md">
            Creamy Pasta
          </div>
          <div className="bg-white text-darkGray p-6 rounded-lg shadow-md">
            Garlic Bread
          </div>
          <div className="bg-white text-darkGray p-6 rounded-lg shadow-md">
            Spaghetti
          </div>
          <div className="bg-white text-darkGray p-6 rounded-lg shadow-md">
            Burgers
          </div>
          <div className="bg-white text-darkGray p-6 rounded-lg shadow-md">
            Pizza
          </div>
          <div className="bg-white text-darkGray p-6 rounded-lg shadow-md">
            Sushi Rolls
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center shadow-lg w-full rounded-3xl mx-auto max-w-7xl">
        <h2 className="text-4xl font-semibold text-darkGray">Read Our Blog</h2>
        <div className="mt-6 flex justify-center gap-10 max-w-6xl mx-auto">
          <div className="bg-rosyBrown p-5 h-24 w-64 rounded-lg shadow-md text-center flex items-center justify-center">
            5 Healthy Recipes to Try
          </div>
          <div className="bg-rosyBrown p-5 h-24 w-64 rounded-lg shadow-md text-center flex items-center justify-center">
            Easy Recipes for Beginners
          </div>
          <div className="bg-rosyBrown p-5 h-24 w-64 rounded-lg shadow-md text-center flex items-center justify-center">
            Healthy Eating Tips
          </div>
        </div>
      </section>

      <div className="pb-32"></div>
    </div>
  );
}

export default Home;
