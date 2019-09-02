

const createRestaurantHTML = (restaurant) => {
    return `

      <section class="restaurant">
            <h3>${restaurant.sortable_name}</h3>
            <h4>${restaurant.veg_level_description}</h4>
        <P>${restaurant.short_description}</p>
            <p>${restaurant.address1}</p>
            <p>${restaurant.city}, ${restaurant.region} ${restaurant.postal_code}</p>
            <p>${restaurant.phone}</p>
            <p>${restaurant.website}</p>
            <section>
            <div class="mapouter"><div class="gmap_canvas"><iframe width="280" height="249" id="gmap_canvas" src="https://maps.google.com/maps?q=${restaurant.address1}%20${restaurant.city}%20${restaurant.region}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>Google Maps Generator by <a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div><style>.mapouter{position:relative;text-align:right;height:249px;width:280px;}.gmap_canvas {overflow:hidden;background:none!important;height:249px;width:280px;}</style></div>
            </section>

        </section></br>
    `
}



{/* <p>${restaurant.hours[0].days} ${restaurant.hours[0].hours}</p>
            <p>${restaurant.hours[1].days} ${restaurant.hours[1].hours}</p>
            <p>${restaurant.hours[2].days} ${restaurant.hours[2].hours}</p> */}