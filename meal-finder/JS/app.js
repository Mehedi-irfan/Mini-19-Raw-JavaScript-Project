//asign all veriable take the html file
const submit = document.getElementById('submit');
const search = document.getElementById('search');
const random = document.getElementById('random');
const resultHeading = document.getElementsByClassName('result-heading');
const mealsEl = document.getElementById('meals');
const singleMeal = document.getElementsByClassName('single-meal');

//search meal function generate
function searchMeal(e) {
    e.preventDefault();

    const term = search.value;

    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {

                resultHeading.innerHTML = `<h2>Search result for ${term}</h2>`;
                if (data.meals === null) {
                    resultHeading.innerHTML = `<h2>There are no result for ${term}</h2>`
                }
                else {
                    mealsEl.innerHTML = data.meals.map((ml) => `
                    <div class='meal'>
                        <img src='${ml.strMealThumb}'>
                            <div class='meal-info' data-mealId='${ml.idMeal}'>
                                <h3>${ml.strMeal}</h3>
                            </div>
                    </div>
                        `
                    )
                        .join("")
                }
            })
    }
    else {
        alert('please enter the value of search box')
    }
    // singleMeal.innerHTML = '';
}

function getMealId(mealId) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];
            addMealToDom(meal);
        })
}

function addMealToDom(meal) {
    const ingradiants = [];
    for (let i = 0; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingradiants.push(`
                    ${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}
            `);
        }
        else {
            break;
        }
    }
    singleMeal.innerHTML = `
        <div class="single-meal">
            <h1>${meal.strMeal}</h1>
            <img src="${meal.strMealThumb}">
            <div class='single-meal-info'>
                ${meal.strCategory ? ` <p>${meal.strCategory}</p>` : ' '}
                ${meal.strArea ? `<p>${meal.strArea}</p>` : " "}
            </div>
            <div class='main'>
                <p>${meal.setInstructions}</p>
                <h2>Ingredients</h2>
                <ul>
                    ${ingradiants.map(ing => `<li>${ing}</li>`).join(' ')}
                </ul>
            </div>
        </div>
    `
}

//Generata a even listner
submit.addEventListener('submit', searchMeal)
mealsEl.addEventListener('click', e => {
    const mealInfo = e.path.find((item) => {
        if (item.classList) {
            return item.classList.contains("meal-info");
        }
        else {
            return false
        }
    });
    if (mealInfo) {
        const mealId = mealInfo.getAttribute("data-mealId");
        getMealId(mealId);
    }
});