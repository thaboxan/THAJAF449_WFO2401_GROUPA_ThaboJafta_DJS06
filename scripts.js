//ts-check

/**
 * A list of provinces.
 * @type {string[]}
 */
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

/**
 * A list of names.
 * @type {string[]}
 */
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifiso",
  "Shailen",
  "Frikkie",
];

/**
 * A list of products with prices.
 * @type {Object[]}
 * @property {string} product - The name of the product.
 * @property {number|string} price - The price of the product.
 */
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

/**
 * 1. **ForEach Basics**: Use `forEach` to log each name and each province to the console.
 * Then, log each name with a matching province in the format "Name (Province)".
 */
provinces.forEach((province) => console.log(province));
names.forEach((name) => console.log(name));

names.forEach((name, index) => console.log(`${name}, ${provinces[index]}`));

/**
 * 2. **Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase.
 * Log the new array to the console.
 * @type {string[]}
 */
let upperCaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(upperCaseProvinces);

/**
 * 3. **Name Lengths**: Create a new array using `map` that contains the length of each name.
 * @type {number[]}
 */
let lengthName = names.map((name) => name.length);
console.log(lengthName);

/**
 * 4. **Sorting**: Use `sort` to alphabetically sort the provinces.
 * @type {string[]}
 */
const sortProvinces = provinces.sort();
console.log(sortProvinces);

/**
 * 5. **Filtering Cape**: Use `filter` to remove provinces containing "Cape".
 * Log the count of remaining provinces.
 * @type {string[]}
 */
let RemoveincludesCape = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(RemoveincludesCape);

/**
 * 6. **Finding 'S'**: Create a boolean array using `map` and
 * `some` to determine if a name contains the letter 'S'.
 * @type {boolean[]}
 */
const findS = names.map((name) => name.split("").some((char) => char === "S"));
console.log(findS);
/**
 * 7. **Creating Object Mapping**: Use `reduce` to transform the
 *  names array into an object mapping names to their respective provinces.
 * @type {Object.<string, string>}
 */
const nameProvinceMap = names.reduce((map, name, index) => {
  map[name] = provinces[index];
  return map;
}, {});

console.log("nameProvinceMap:", nameProvinceMap);
//ADVANCED~
/**
 * 1. **Log Products**: Iterate over the products array, logging each product name.
 */
console.log(
  "Products:",
  products.map((item) => item.product)
);

/**
 * 2. **Filter by Name Length**: Filter out products with names
 * longer than 5 characters.
 * @type {Object[]}
 */
console.log(
  "Filtered Products (Name Length ≤ 5):",
  products.filter((item) => item.product.length <= 5)
);

/**
 * 3. **Price Manipulation**: Filter out products without prices, convert string prices to numbers,
 * and calculate the total price using `reduce`.
 * @type {number}
 */

// Filter out products with valid prices
const validProducts = products.filter(
  (item) => String(item.price).trim() !== ""
);
console.log("Valid Products", validProducts);

// Convert prices to numbers and calculate the total
const totalPrice = validProducts.reduce((total, item) => {
  const price = parseFloat(item.price);
  return isNaN(price) ? total : total + price;
}, 0);

console.log(`Total Price : R ${totalPrice}`);
/**
 * 4. **Concatenate Product Names**: Use `reduce` to concatenate
 *  all product names into a single string.
 * @type {string}
 */
const concatString = products.reduce(
  (string, item) => string + " " + item.product,
  ""
);
console.log(concatString);

/**
 * 5. **Find Extremes in Prices**: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
 * @type {string}
 */
const highestPriced =
  "Highest: " +
  Math.max(
    ...products
      .filter((item) => item.price > 0)
      .map((item) => Number(item.price))
  );

const lowestPriced =
  " Lowest: " +
  Math.min(
    ...products
      .filter((item) => item.price > 0)
      .map((item) => Number(item.price))
  );

console.log(highestPriced + lowestPriced);

/**
 * 6. **Object Transformation**: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.
 * @type {Object[]}
 */
console.log(
  Object.entries(products).reduce(
    (accumulatorArray, [, { product, price }]) => {
      accumulatorArray.push({ name: product, cost: price });
      return accumulatorArray;
    },
    []
  )
);
