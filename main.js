
 getrestaurantData("lincoln", "ne", "1").then((restaurants) => {
     console.log(restaurants.entries)
    for (const restaurant of restaurants.entries) {
        const restaurantHTML = createRestaurantHTML(restaurant)
        renderRestaurant(restaurantHTML)
        }
})
