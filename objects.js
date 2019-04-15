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
