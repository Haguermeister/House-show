const { faker } = require("@faker-js/faker");
const db = require("../config/connection");
const { Host, Artist, Venue } = require("../models");

db.once("open", async () => {
  await Host.deleteMany({});
  await Artist.deleteMany({});
  await Venue.deleteMany({});

  // // create venue data
  let venueData = [];
  for (let i = 0; i < 25; i += 1) {
    const data = {
      // _id: faker.database.mongodbObjectId(),
      name: faker.random.words(),
      owner: faker.name.findName(),
      description: faker.lorem.words(Math.round(Math.random() * 20) + 1),
      occupancy: faker.datatype.number(),
      pictures: faker.image.imageUrl(),
      city: faker.address.cityName(),
      cost: faker.datatype.number(),
    };

    venueData.push(data);
  }

  const createdVenues = await Venue.collection.insertMany(venueData);

  // // create artist data
  const artistData = [];

  for (let i = 0; i < 25; i += 1) {
    const data = {
      username: faker.unique(faker.internet.userName),
      name: faker.unique(faker.name.findName),
      musicType: faker.music.genre(),
      bandSize: faker.datatype.number(),
      rate: faker.datatype.number(),
      pictures: faker.image.imageUrl(),
      spotifyLink: faker.internet.url(),
      email: faker.unique(faker.internet.email),
      password: faker.internet.password(),
      venues: createdVenues,
    };

    artistData.push(data);
  }

  const createdArtists = await Artist.collection.insertMany(artistData);

  // create host data
  const hostData = [];

  for (let i = 0; i < 25; i += 1) {
    const data = {
      username: faker.unique(faker.internet.userName),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.unique(faker.internet.email),
      password: faker.internet.password(),
      artists: createdArtists,
      venues: createdVenues,
    };

    hostData.push(data);
  }

  const createdHosts = await Host.collection.insertMany(hostData);

  console.log("All done!");
  process.exit(0);
});