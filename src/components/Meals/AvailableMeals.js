import classes from './AvailableMeals.module.css'
const DUMMY_MEALS = [{
        id: 'm1',
        name: 'Chicken Tikka',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Dal Makhni',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Butter Chicken',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Chicken Biryani',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {
        const mealList = DUMMY_MEALS.map((meal) => < li > { meal.name } < /li>);

            return ( <
                section className = { classes.meals } >
                <
                ul > { mealList } <
                /ul> <
                /section>
            );

        }
        export default AvailableMeals;