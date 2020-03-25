var faker = require('faker');

var database = { offers: []};

for (var i = 1; i<= 30; i++) {
  database.offers.push({
    id: i,
    title: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    salary: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    badges: [{"class":"fav","name":"Favorite"}, {"class":"jobtype","name":"Recruitment"}, {"class":"match","name":"High Match"}],
  });
}

console.log(JSON.stringify(database));
