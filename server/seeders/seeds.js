const { faker } = require("@faker-js/faker");
const db = require("../config/connection");
const { Host, Artist, Venue } = require("../models");

db.once("open", async () => {
  await Host.deleteMany({});
  await Artist.deleteMany({});
  await Venue.deleteMany({});

  // // create venue data
  let venueData = [];
  for (let i = 0; i < 10; i += 1) {
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

  for (let i = 0; i < 10; i += 1) {
    const data = {
      username: faker.internet.userName(),
      name: faker.name.findName(),
      musicType: faker.music.genre(),
      bandSize: faker.datatype.number(),
      rate: faker.datatype.number(),
      pictures: faker.image.imageUrl(),
      spotifyLink: faker.internet.url(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      // venues: createdVenues,
    };

    artistData.push(data);
  }

  const createdArtists = await Artist.collection.insertMany(artistData);

  // create host data
  const hostData = [];

  for (let i = 0; i < 10; i += 1) {
    const data = {
      username: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      // artists: createdArtists,
      // venues: createdVenues,
    };

    hostData.push(data);
  }

  const createdHosts = await Host.collection.insertMany(hostData);

  // create artists for host data
  // for (let i = 0; i < 10; i += 1) {
  //   const data = {
  //     username: faker.internet.userName(),
  //     name: faker.name.findName(),
  //     musicType: faker.music.genre(),
  //     bandSize: faker.datatype.number(),
  //     rate: faker.datatype.number(),
  //     pictures: faker.image.imageUrl(),
  //     spotifyLink: faker.internet.url(),
  //     email: faker.internet.email(),
  //     password: faker.internet.password(),
  //   };

  //   const randomHostIndex = Math.floor(Math.random() * createdHosts.ops.length);
  //   const { username, _id: hostId } = createdHosts.ops[randomHostIndex];

  //   const createdArtist = await Artist.create({
  //     data,
  //     username,
  //   });

  //   const updatedHost = await Host.updateOne(
  //     { _id: hostId },
  //     { $push: { artists: createdArtist._id } }
  //   );
  // }

  console.log("All done!");
  process.exit(0);
});
