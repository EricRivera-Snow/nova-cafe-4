import Storefront from "../assets/img/Storefront.jpg";
import NovaCafeLogo from "../assets/img/nova-cafe-logo.png";

function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Storefront})` }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-lg"></div>
      <div className="relative text-center pt-24 p-10 min-h-screen pb-32">
        <section className="text-center py-20 px-4 bg-white bg-opacity-75 backdrop-blur-md rounded-lg shadow-lg max-w-5xl mx-auto">
          <img
            src={NovaCafeLogo}
            alt="Nova Cafe Logo"
            className="mx-auto w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h1 className="text-5xl font-bold text-darkGray">
            Welcome to Nova Cafe!
          </h1>
          <p className="text-lg text-black mt-4">
            We are a locally driven breakfast cafe located in the heart of
            historic downtown Bozeman. The Nova Cafe prides itself on a number
            of homemade recipes cooked in-house as well as a wide-ranging
            gluten-free and vegan-friendly menu. We look to create an open, fun,
            and inviting environment for your dining experience!
          </p>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-4xl font-semibold text-darkGray mb-6">
            Menu Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Breakfast", img: "the-standard.jpg" },
              { name: "Lunch", img: "blt.jpg" },
              { name: "Sides/Build a Plate", img: "side-chorizo.jpg" },
              { name: "Kids' Menu", img: "kids-waffle.jpg" },
              { name: "Merch", img: "coffee-mug.jpg" },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-75 backdrop-blur-md p-6 rounded-lg shadow-md text-center flex flex-col justify-between h-60"
              >
                <h3 className="text-xl font-semibold text-darkGray">
                  {category.name}
                </h3>
                <div className="w-full h-32 flex justify-center items-end">
                  <img
                    src={`src/assets/img/${category.img}`}
                    alt={category.name}
                    className="h-full w-auto max-w-full rounded-lg object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-4xl font-semibold text-darkGray">
            Trending Dishes
          </h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Creamy Pasta",
              "Garlic Bread",
              "Spaghetti",
              "Burgers",
              "Pizza",
              "Sushi Rolls",
            ].map((dish, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-75 backdrop-blur-md text-darkGray p-6 rounded-lg shadow-md"
              >
                {dish}
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-white bg-opacity-75 backdrop-blur-md text-center shadow-lg w-full rounded-3xl mx-auto max-w-7xl mb-20">
          <h2 className="text-4xl font-semibold text-darkGray">
            Read Our Blog
          </h2>
          <div className="mt-6 flex justify-center gap-10 max-w-6xl mx-auto">
            {[
              "5 Healthy Recipes to Try",
              "Easy Recipes for Beginners",
              "Healthy Eating Tips",
            ].map((blog, index) => (
              <div
                key={index}
                className="bg-rosyBrown p-5 h-24 w-64 rounded-lg shadow-md text-center flex items-center justify-center"
              >
                {blog}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
