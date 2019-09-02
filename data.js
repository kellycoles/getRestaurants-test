
const getrestaurantData = (city,state,vegLevel) => {
       // I will use interplation to allow user to select city,state, and veg-level
    return fetch(`https://www.vegguide.org/search/by-address/${city},+${state}/filter/category_id=1;veg_level=${vegLevel};?unit=mile;distance=10`)
        .then(response => response.json())
 }






