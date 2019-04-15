var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}

meals.snack = 'yogurt';

console.log(meals['snack'])

meals['second breakfast'] = 'bagel'

console.log(meals['second breakfast'])

var sweetMeal = 'dessert'
meals[sweetMeal] = 'cake';

meals.dessert // 'cake'
meals[sweetMeal] // 'cake'

console.log(meals.dessert)

console.log(meals.breakfast)
meals.breakfast = 'cereal'
console.log(meals.breakfast)
delete meals.breakfast
console.log(meals.breakfast)
