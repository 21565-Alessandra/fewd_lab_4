var restaurant = {
    name: 'The Chef Cuisine  Temple Bar',
    tables: 45,
    booked: 25,
    breakfast: true,
    orders: ['online', 'phone', 'just eat', 'collection'],
    checkAvailablity: function() {
        return this.tables - this.booked;
    }
};

var elName = document.getElementById('restaurantName');
elName.textContent = restaurant.name;

var elTables = document.getElementById('tables');
elTables.textContent = restaurant.checkAvailablity();

