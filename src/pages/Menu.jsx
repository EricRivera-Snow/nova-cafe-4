import React from "react";
import MenuGrid from "./MenuGrid";

//breakfast pickup items

const eggcellent = [
  {
    name: "The Standard",
    description:
      "Two eggs any style and two pieces of bacon or sausage links. Sub seasoned tofu or green chickpea falafel for eggs for additional charge.",
    image: "src/assets/img/the-standard.jpg",
    price: "$11.00",
  },
  {
    name: "Nova Skosh Scramble",
    description:
      "Two eggs scrambled with wild Alaskan smoked salmon, green onions, and cream cheese.",
    image: "src/assets/img/nova-skosh-scramble.jpg",
    price: "$16.00",
  },
  {
    name: "Meat Lover Scramble",
    description:
      "Three eggs scrambled with smoked ham, bacon, sausage, and white cheddar cheese.",
    image: "src/assets/img/meat-lover-scramble.jpg",
    price: "$16.00",
  },
  {
    name: "Forager Scramble",
    description:
      "Two eggs scrambled with mushrooms, artichoke hearts, roasted red peppers, summer squash, zucchini, and provolone cheese.",
    image: "src/assets/img/forager-scramble.jpg",
    price: "$16.00",
  },
  {
    name: "Gusto Chorizo Scramble",
    description:
      "Two eggs scrambled with ground Mexican chorizo, roasted garlic puree, roasted red peppers, and cotija cheese.",
    image: "src/assets/img/gusto-chorizo-scramble.jpg",
    price: "$16.00",
  },
  {
    name: "Classic Eggs Benedict",
    description: "English muffin, eggs, ham, hollandaise, and paprika.",
    image: "src/assets/img/classic-eggs-benedict.jpg",
    price: "$16.00",
  },
  {
    name: "Avo Benedict",
    description:
      "English muffin, eggs, tomato, avocado, hollandaise, and paprika.",
    image: "src/assets/img/avo-benedict.jpg",
    price: "$16.00",
  },
  {
    name: "Smoked Salmon Eggs Benedict",
    description:
      "English muffin, eggs, smoked salmon, hollandaise, and paprika.",
    image: "src/assets/img/smoked-salmon-eggs-benedict.jpg",
    price: "$17.00",
  },
  {
    name: "Vegan Standard",
    description:
      "Our classic standard with all vegan options pre-selected. Tofu instead of eggs, avocado for the protein, and your choice of dressing.",
    image: "src/assets/img/vegan-standard.jpg",
    price: "$11.00",
  },
];

const hotOffTheGriddle = [
  {
    name: "Buttermilk Waffle",
    description:
      "Buttermilk waffle served with fresh seasonal fruit, Nova syrup, and butter.",
    image: "src/assets/img/buttermilk-waffle.jpg",
    price: "$13.00",
  },
  {
    name: "Chia Waffle",
    description:
      "Gluten-free chia waffle topped with homemade raspberry coulis and butter. Served with fresh seasonal fruit and Nova syrup.",
    image: "src/assets/img/chia-waffle.jpg",
    price: "$15.00",
  },
  {
    name: "Cottage Cheese Pancake Single",
    description:
      "You guessed it! Single pancake with cottage cheese, served with Nova syrup and butter.",
    image: "src/assets/img/cottage-cheese-pancake-single.jpg",
    price: "$9.00",
  },
  {
    name: "Cottage Cheese Pancake Full",
    description:
      "You guessed it! Two pancakes with cottage cheese, served with Nova syrup and butter.",
    image: "src/assets/img/cottage-cheese-pancake-full.jpg",
    price: "$15.00",
  },
  {
    name: "Nova French Toast",
    description:
      "Two thick cut slices of challah bread French toast. Finished with powdered sugar and served with a dollop of whipped cream and Nova syrup.",
    image: "src/assets/img/nova-french-toast.jpg",
    price: "$13.00",
  },
  {
    name: "Pancake Single",
    description: "Single buttermilk pancake served with Nova syrup and butter.",
    image: "src/assets/img/pancake-single.jpg",
    price: "$8.00",
  },
  {
    name: "Pancake Full",
    description: "Two buttermilk pancakes served with Nova syrup and butter.",
    image: "src/assets/img/pancake-full.jpg",
    price: "$14.00",
  },
  {
    name: "The Deuce",
    description:
      "Two buttermilk pancakes topped with two eggs any style and two pieces of bacon or sausage links, served with Nova syrup.",
    image: "src/assets/img/the-deuce.jpg",
    price: "$17.00",
  },
];

const novaStarlicious = [
  {
    name: "Huevos Rancheros",
    description:
      "Flour tortilla (or sub corn tortillas) with black bean chili, jalapenos, and cotija cheese. Topped with salsa, sour cream, and avocado.",
    image: "src/assets/img/cowboy-hash-bowl.jpg",
    price: "$17.00",
  },
  {
    name: "Mom's Breakfast Burrito",
    description:
      "Two eggs scrambled with bacon, white cheddar, and home fries, wrapped in a flour tortilla. Served with salsa and sour cream on the side.",
    image: "src/assets/img/moms-breakfast-burrito.jpg",
    price: "$15.00",
  },
  {
    name: "Bison Sausage Burrito",
    description:
      "Homemade bison sausage, scrambled eggs, sautéed onions and green peppers, home fries, and pepper jack cheese, wrapped in a flour tortilla.",
    image: "src/assets/img/moms-breakfast-burrito.jpg",
    price: "$16.00",
  },
  {
    name: "Breakfast Sandwich",
    description:
      "Two eggs scrambled with bacon and white cheddar cheese on focaccia. Served with a side of hollandaise and home fries.",
    image: "src/assets/img/breakfast-sandwich.jpg",
    price: "$16.00",
  },
  {
    name: "Forbidden Hash Bowl",
    description:
      "Forbidden black rice, sweet potato, roasted red pepper, home fries, baby kale, and sesame seeds. Topped with eggs any style and crispy onions.",
    image: "src/assets/img/forbidden-hash-bowl.jpg",
    price: "$17.00",
  },
  {
    name: "Cowboy Hash Bowl",
    description:
      "Sautéed onions, green and red bell peppers, home fries, ham, bacon, and Pioneer Meats Habanero sausage. Topped with two eggs any style.",
    image: "src/assets/img/cowboy-hash-bowl.jpg",
    price: "$18.00",
  },
  {
    name: "Turkey Hash Bowl",
    description:
      "Roasted turkey sautéed with red and green peppers, onions, squash, zucchini, and home fries. Topped with two eggs any style.",
    image: "src/assets/img/turkey-hash-bowl.jpg",
    price: "$17.00",
  },
  {
    name: "Molly’s Grit Bowl",
    description:
      "A bowl of Molly’s homemade creamy roasted red pepper goat cheese grits, topped with two eggs any style, two pieces of toast, and greens.",
    image: "src/assets/img/mollys-grit-bowl.jpg",
    price: "$17.00",
  },
  {
    name: "Vegan Burrito",
    description:
      "Our hearty breakfast burrito with all vegan options pre-selected. Tofu instead of egg, our house-made black bean chili for the protein, and seasonal veggies.",
    image: "src/assets/img/moms-breakfast-burrito.jpg",
    price: "$15.00",
  },
  {
    name: "Vegan Huevos Rancheros",
    description:
      "The popular Huevos Rancheros with all vegan options pre-selected. Your choice of flour or corn tortilla, topped with our house-made black bean chili, avocado, and vegan cheese.",
    image: "src/assets/img/vegan-forbidden-hash-bowl.jpg",
    price: "$17.00",
  },
  {
    name: "Vegan Forbidden Hash Bowl",
    description:
      "Our beloved Forbidden Hash with all vegan options pre-selected.",
    image: "src/assets/img/vegan-forbidden-hash-bowl.jpg",
    price: "$17.00",
  },
];

const salads = [
  {
    name: "Greek Salad",
    description:
      "Your choice of grilled chicken or green chickpea falafel with tomatoes, artichoke hearts, kalamata olives, and feta on a bed of greens.",
    image: "src/assets/img/greek-salad.jpg",
    price: "$12.00",
  },
  {
    name: "Wheat Berry Warm Salad",
    description:
      "A savory blend of wheat berries, white beans, spinach, cherry tomatoes, and red onion tossed with fresh baby arugula and balsamic vinaigrette.",
    image: "src/assets/img/wheat-berry-warm-salad.jpg",
    price: "$12.00",
  },
  {
    name: "Carne Asada Steak Salad",
    description:
      "Roasted sweet corn, roasted poblano pepper, and cotija on a bed of baby arugula, tossed with a balsamic drizzle, topped with grilled carne asada.",
    image: "src/assets/img/carne-asada-steak-salad.jpg",
    price: "$17.00",
  },
  {
    name: "Side Salad",
    description:
      "Mixed greens, shredded carrots, cherry tomatoes, and cucumbers.",
    image: "src/assets/img/side-salad.jpg",
    price: "$5.00",
  },
];

const sandwiches = [
  {
    name: "Club Sandwich",
    description:
      "Turkey, bacon, lettuce, avocado, tomato, and mayo on your choice of bread.",
    image: "src/assets/img/club-sandwich.jpg",
    price: "$15.00",
  },
  {
    name: "BLT",
    description:
      "A classic bacon, lettuce, tomato, on your choice of bread with mayo.",
    image: "src/assets/img/blt.jpg",
    price: "$14.00",
  },
  {
    name: "Brie Melt",
    description:
      "Melted brie on toasty focaccia with prosciutto, basil pesto, roasted red pepper, and baby arugula.",
    image: "src/assets/img/brie-melt.jpg",
    price: "$16.00",
  },
  {
    name: "Steak Sandwich",
    description:
      "Carne asada, red and green bell peppers, onions, arugula, and horseradish drizzle on a hoagie bun.",
    image: "src/assets/img/steak-sandwich.jpg",
    price: "$17.00",
  },
  {
    name: "Greek Wrap",
    description:
      "Your choice of grilled chicken or green chickpea falafel with tomatoes, artichoke hearts, kalamata olives, feta, lettuce, and a light dressing.",
    image: "src/assets/img/greek-wrap.jpg",
    price: "$16.00",
  },
];

const sidesPieces = [
  {
    name: "Fruit Bowl",
    description: "A selection of fresh seasonal fruit.",
    image: "src/assets/img/fruit-bowl.jpg",
    price: "$9.00",
  },
  {
    name: "Side Avocado",
    description: "Fresh sliced avocado.",
    image: "src/assets/img/side-avocado.jpg",
    price: "$3.00",
  },
  {
    name: "Side Bacon",
    description: "3 pieces of our bacon, cooked soft or crisp.",
    image: "src/assets/img/side-bacon.jpg",
    price: "$5.00",
  },
  {
    name: "Side Biscuit",
    description: "A warm, buttery biscuit.",
    image: "src/assets/img/side-biscuit.jpg",
    price: "$3.00",
  },
  {
    name: "Side Black Bean Chili",
    description: "A hearty portion of our house-made black bean chili.",
    image: "src/assets/img/side-black-bean-chili.jpg",
    price: "$4.00",
  },
  {
    name: "Side Carne Asada",
    description: "Tender grilled carne asada strips.",
    image: "src/assets/img/side-carne-asada.jpg",
    price: "$6.00",
  },
  {
    name: "Side Chicken",
    description: "A side portion of grilled or roasted chicken.",
    image: "src/assets/img/side-chicken.jpg",
    price: "$6.00",
  },
  {
    name: "Side Chorizo",
    description: "A serving of flavorful Mexican chorizo.",
    image: "src/assets/img/side-chorizo.jpg",
    price: "$6.00",
  },
  {
    name: "Side Egg",
    description: "A single egg cooked to your preference.",
    image: "src/assets/img/side-egg.jpg",
    price: "$2.00",
  },
  {
    name: "Side Falafel",
    description: "A portion of crispy chickpea falafel.",
    image: "src/assets/img/side-falafel.jpg",
    price: "$6.00",
  },
  {
    name: "Side Fruit",
    description: "A small bowl of fresh seasonal fruit.",
    image: "src/assets/img/side-fruit.jpg",
    price: "$4.00",
  },
  {
    name: "Side Home Fries",
    description: "A large side portion of home fries.",
    image: "src/assets/img/side-home-fries.jpg",
    price: "$4.00",
  },
  {
    name: "Side Salad",
    description:
      "A fresh side salad with mixed greens, shredded carrots, cherry tomatoes, and cucumbers.",
    image: "src/assets/img/side-salad.jpg",
    price: "$5.00",
  },
  {
    name: "Side Sausage",
    description: "3 sausage links.",
    image: "src/assets/img/side-sausage.jpg",
    price: "$5.00",
  },
  {
    name: "Side Smoked Ham",
    description: "3 pieces of our sliced smoked ham.",
    image: "src/assets/img/side-smoked-ham.jpg",
    price: "$5.00",
  },
  {
    name: "Side Smoked Salmon",
    description: "A portion of our house-smoked salmon.",
    image: "src/assets/img/side-smoked-salmon.jpg",
    price: "$5.85",
  },
  {
    name: "Side Toast",
    description: "Two slices of toasted bread.",
    image: "src/assets/img/side-toast.jpg",
    price: "$2.00",
  },
  {
    name: "Side Tofu",
    description: "A portion of our house-seasoned tofu.",
    image: "src/assets/img/side-tofu.jpg",
    price: "$5.00",
  },
];

const kidsMenu = [
  {
    name: "Kids' Cake",
    description: "It's like a pancake, but smaller.",
    image: "src/assets/img/kids-cake.jpg",
    price: "$7.00",
  },
  {
    name: "Kids' Waffle",
    description: "One half of our delicious waffles for the kiddos.",
    image: "src/assets/img/kids-waffle.jpg",
    price: "$7.00",
  },
  {
    name: "Kidito Burrito",
    description: "Un poquito burrito.",
    image: "src/assets/img/kidito-burrito.jpg",
    price: "$9.00",
  },
  {
    name: "Kid's Grilled Cheese",
    description: "A melty grilled cheese on your choice of bread.",
    image: "src/assets/img/kids-grilled-cheese.jpg",
    price: "$9.00",
  },
  {
    name: "Kid's PB&J",
    description:
      "A classic peanut butter and jelly sandwich made on your choice of bread.",
    image: "src/assets/img/kids-pbj.jpg",
    price: "$9.00",
  },
];

const coffee = [
  {
    name: "Coffee 16 oz",
    description: "A classic brewed coffee served in a 16 oz cup.",
    image: "src/assets/img/coffee-16oz.jpg",
    price: "$3.25",
  },
  {
    name: "Espresso (Double Shot)",
    description:
      "A concentrated shot of rich espresso with a bold and robust flavor.",
    image: "src/assets/img/espresso-double-shot.jpg",
    price: "$3.50",
  },
  {
    name: "Cappuccino",
    description:
      "A perfect balance of espresso, steamed milk, and frothy foam.",
    image: "src/assets/img/cappuccino.jpg",
    price: "$4.50",
  },
  {
    name: "Americano",
    description: "Espresso diluted with hot water for a smooth taste.",
    image: "src/assets/img/americano.jpg",
    price: "$4.00",
  },
  {
    name: "Mocha",
    description: "A delicious blend of espresso, steamed milk, and chocolate.",
    image: "src/assets/img/mocha.jpg",
    price: "$4.50",
  },
  {
    name: "Breve",
    description:
      "A creamy mix of espresso and half-and-half, offering a rich texture.",
    image: "src/assets/img/breve.jpg",
    price: "$5.00",
  },
  {
    name: "Latte",
    description:
      "Smooth espresso blended with steamed milk and a light layer of foam.",
    image: "src/assets/img/latte.jpg",
    price: "$4.50",
  },
];

const juices = [
  {
    name: "Orange Juice",
    description: "A refreshing glass of orange juice.",
    image: "src/assets/img/juice.jpg",
    price: "$3.50",
  },
];

const soda = [
  {
    name: "Coke",
    description: "A classic Coca-Cola can.",
    image: "src/assets/img/coke.jpg",
    price: "$2.50",
  },
  {
    name: "Diet Coke",
    description: "A refreshing Diet Coke can.",
    image: "src/assets/img/diet-coke.jpg",
    price: "$2.50",
  },
  {
    name: "Sprite",
    description: "A can of crisp and refreshing Sprite.",
    image: "src/assets/img/sprite.jpg",
    price: "$2.50",
  },
  {
    name: "Root Beer",
    description: "A can of classic root beer.",
    image: "src/assets/img/root-beer.jpg",
    price: "$2.50",
  },
  {
    name: "Dr Pepper",
    description: "A can of Dr Pepper with its signature bold taste.",
    image: "src/assets/img/dr-pepper.jpg",
    price: "$2.50",
  },
];

const laCroix = [
  {
    name: "Lime",
    description: "A can of LaCroix Lime sparkling water.",
    image: "src/assets/img/lacroix-lime.jpg",
    price: "$2.50",
  },
  {
    name: "Lemon",
    description: "A can of LaCroix Lemon sparkling water.",
    image: "src/assets/img/lacroix-lemon.jpg",
    price: "$2.50",
  },
  {
    name: "Pamplemousse",
    description: "A can of LaCroix Pamplemousse (grapefruit) sparkling water.",
    image: "src/assets/img/lacroix-pamplemousse.jpg",
    price: "$2.50",
  },
];

const italianSoda = [
  {
    name: "Italian Soda",
    description: "A handcrafted Italian soda with a variety of flavor options.",
    image: "src/assets/img/italian-soda.jpg",
    price: "$5.00",
  },
];

const Menu = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4 fixed top-0 w-full z-10">
        <h1 className="text-2xl font-bold text-center">🍽️ Nova Cafe</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 pb-32 px-5 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Menu</h1>

        <h2 className="text-xl font-semibold italic mt-10 mb-4">
          Breakfast - &#40;Pick Up&#41;
        </h2>
        <h2 className="text-xl font-semibold italic mb-6">Eggcellent</h2>
        <MenuGrid menuArray={eggcellent} />

        <h2 className="text-xl font-semibold italic mt-10 mb-4">
          Hot Off the Griddle
        </h2>
        <MenuGrid menuArray={hotOffTheGriddle} />

        <h2 className="text-xl font-semibold italic mt-10 mb-4">
          Nova Starlicious-Dishes
        </h2>
        <MenuGrid menuArray={novaStarlicious} />

        <h2 className="text-xl font-semibold italic mt-10 mb-4">
          Lunch - &#40;Pick Up&#41;
        </h2>
        <h2 className="text-xl font-semibold italic mb-6">Salads</h2>
        <MenuGrid menuArray={salads} />
        <h2 className="text-xl font-semibold italic mt-10 mb-4">Sandwiches</h2>
        <MenuGrid menuArray={sandwiches} />

        <h2 className="text-xl font-semibold italic mt-10 mb-4">
          Sides/Build a Plate - &#40;Pick Up&#41;
        </h2>
        <h2 className="text-xl font-semibold italic mb-6">Sides Pieces</h2>
        <MenuGrid menuArray={sidesPieces} />

        <h2 className="text-xl font-semibold italic mt-10 mb-4">
          Kids' Menu - &#40;Pick Up&#41;
        </h2>
        <h2 className="text-xl font-semibold italic mb-6">Kids' Menu</h2>
        <MenuGrid menuArray={kidsMenu} />

        <h2 className="text-xl font-semibold italic mt-10 mb-4">
          Drinks - &#40;Pick Up&#41;
        </h2>
        <h2 className="text-xl font-semibold italic mb-6">Coffee</h2>
        <MenuGrid menuArray={coffee} />
        <h2 className="text-xl font-semibold italic mt-10 mb-4">Juices</h2>
        <MenuGrid menuArray={juices} />
        <h2 className="text-xl font-semibold italic mb-6">Soda</h2>
        <MenuGrid menuArray={soda} />
        <h2 className="text-xl font-semibold italic mt-10 mb-4">La Croix</h2>
        <MenuGrid menuArray={laCroix} />
        <h2 className="text-xl font-semibold italic mt-10 mb-4">
          Italian Soda
        </h2>
        <MenuGrid menuArray={italianSoda} />
      </main>

      {/* Footer (not fixed, but ensures spacing) */}
      <footer className="bg-white shadow-md py-6 text-center">
        <p className="text-gray-600">📍 312 E Main St, Bozeman, MT 59715</p>
        <p className="text-gray-600">📞 (406) 587-3973</p>
      </footer>
    </div>
  );
};

export default Menu;
