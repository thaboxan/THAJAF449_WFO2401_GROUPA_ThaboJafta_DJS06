// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifiso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
// 1. **ForEach Basics**: Use `forEach` to log each name and each province
// to the console. Then, log each name with a
// matching province in the format "Name (Province)".
provinces.forEach((provinces) => console.log(provinces));
names.forEach((names) => console.log(names));

names.forEach((names, index) => console.log(`${names}, ${provinces[index]}`));

/*
2. **Uppercase Transformation**: Use `map` to create a new array of 
province names in all uppercase. Log the new array to the console.*/

let upperCaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(upperCaseProvinces);

/*
3. **Name Lengths**: Create a new array using `map` that contains the 
length of each name.
*/

let lengthName = names.map((name) => name.length);
console.log(lengthName);

/*
4. **Sorting**: Use `sort` to alphabetically sort the provinces. 
*/

const sortProvinces = provinces.sort();
console.log(sortProvinces);

/*5. **Filtering Cape**: Use `filter` to remove provinces containing "Cape". 
Log the count of remaining provinces.*/

let RemoveincludesCape = provinces.filter(
  (provinces) => !provinces.includes("Cape")
);
console.log(RemoveincludesCape);

/**
 6. **Finding 'S'**: Create a boolean array using `map` and `some` 
 to determine if a name contains the letter 'S'.
 */

let findS = names.map((names) => names.includes("S"));
console.log(findS);

/*7. **Creating Object Mapping**: Use `reduce` to transform the names 
array into an object mapping names to their respective provinces.
*/

/**
 * const nameProvinceMap = Object.entries(
  names.reduce((name, index) => [name, provinces[index]])
);
 * console.log(nameProvinceMap);
 */

const nameProvinceMap = names.reduce((map, name, index) => {
  map[name] = provinces[index];
  console.log(map[name]);
  return map;
}, {});

console.log(nameProvinceMap);

/*
1. **Log Products**: Iterate over the products array, logging each product name.
*/

console.log(
  "Products:",
  products.map((item) => item.product)
);

/**
 * 2. **Filter by Name Length**: Filter out products with names longer than 5 characters.
 */

console.log(
  "Filtered Products (Name Length ≤ 5):",
  products.filter((items) => items.product.length <= 5)
);

/**
 * 3. **Price Manipulation**: Filter out products without prices,
 *  convert string prices to numbers, and calculate the total price using `reduce`.
 */

const totalPrice = products
  .filter(
    (item) =>
      typeof item.price === "string" &&
      item.price.trim() !== "" &&
      !isNaN(item.price)
  )
  .map((item) => parseFloat(item.price))
  .reduce((total, price) => total + price, 0);

console.log("Total Price:", totalPrice);
