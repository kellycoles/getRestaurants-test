const createTitle = (restaurant) => {
    return `
    <h1>${restaurant.city}, ${restaurant.region}</h1>
    `
    }

const createRestaurantHTML = (restaurant) => {
    return `

      <section class="restaurant">
            <h3>${restaurant.sortable_name}</h3>
            <p>${restaurant.veg_level_description}</p>
            <p>${restaurant.address1}</p>
            <p>${restaurant.city}, ${restaurant.postal_code}</p>
            <p>${restaurant.phone}</p>
            <p>${restaurant.website}</p>
        </section></br>
    `
}
