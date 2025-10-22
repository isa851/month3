const menu = [
  { id: 1, title: "Овсянка", category: "breakfast", price: 200 },
  { id: 2, title: "Кофе", category: "drinks", price: 150 },
  { id: 3, title: "Шашлык", category: "lunch", price: 400 },
  { id: 4, title: "Сок", category: "drinks", price: 120 },
  { id: 5, title: "Омлет", category: "breakfast", price: 250 },
];
// ----------------------------------------------------------------------------------------------- \\
const getByCategory = (category) => {
  return menu.filter(item => item.category === category);
}

console.log("Блюда из категории breakfast:");
console.log(getByCategory("breakfast"));

// ----------------------------------------------------------------------------------------------- \\

const titles = menu.map(item => item.title);
console.log("Названия блюд:", titles);

// ----------------------------------------------------------------------------------------------- \\
const formattedMenu = menu.map(item => ({
  name: item.title,
  cost: `${item.price} сом`
}));
console.log("Форматированный массив:", formattedMenu);

// ----------------------------------------------------------------------------------------------- \\

const expensiveDish = menu.find(item => item.price > 300);
console.log("Первое блюдо дороже 300 сом:", expensiveDish);

// ----------------------------------------------------------------------------------------------- \\

const hasCheapDish = menu.some(item => item.price < 100);
console.log("Есть ли блюдо дешевле 100 сом:", hasCheapDish);


// ----------------------------------------------------------------------------------------------- \\ 

const totalPrice = menu.reduce((sum, item) => sum + item.price, 0);
console.log("Общая сумма всех блюд:", totalPrice);

// ----------------------------------------------------------------------------------------------- \\ 

const categoryCount = menu.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + 1;
  return acc;
}, {});
console.log("Количество блюд по категориям:", categoryCount);
