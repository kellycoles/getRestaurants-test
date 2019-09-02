

const createRestaurantHTML = (restaurant) => {
    return `

      <section class="restaurant">
            <h3>${restaurant.sortable_name}</h3>
            <h4>${restaurant.veg_level_description}</h4>
        <P>${restaurant.short_description}</p>
            <p>${restaurant.address1}</p>
            <p>${restaurant.city}, ${restaurant.postal_code}</p>
            <p>${restaurant.phone}</p>
            <p>${restaurant.website}</p>
        </section></br>
    `
}
