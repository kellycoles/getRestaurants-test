
const getrestaurantData = () => {
    return fetch('https://www.vegguide.org/search/by-address/murfreesboro,+TN/filter/category_id=1;veg_level=1;?unit=mile;distance=10')
        .then(response => response.json())

}






