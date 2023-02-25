import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [{
        id: 'm1',
        name: 'Chicken Tikka',
        description: 'Traditional Indian Cuisine',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Dal Makhni',
        description: 'A indian specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Butter Chicken',
        description: 'Indian, Buttery, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Chicken Biryani',
        description: 'Tasty...and delicious...',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map((meal) =>
        <
        MealItem key = { meal.id }
        name = { meal.name }
        description = { meal.description }
        price = { meal.price }
        />
    );

    return ( <
        section className = { classes.meals } >
        <
        Card >
        <
        ul > { mealList } <
        /ul> <
        /Card> <
        /section>
    );

}
export default AvailableMeals;