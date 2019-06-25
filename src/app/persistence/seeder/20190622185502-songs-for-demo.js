module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('songs', [
      {
        name: 'A Whole New World',
        artist: 'Zayn Malik ft Zhavia Ward',
        album: 'Aladdin 2019',
        track: 1,
        url: 'http://localhost:3000/audio/a_whole_new_world.mp3',
        artwork: 'http://localhost:3000/image/aladdin2019.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lily',
        artist: 'Alan Walker, K-391 & Emelie Hollow',
        album: 'Kiss This Love',
        track: 1,
        url: 'http://localhost:3000/audio/AlanWalker_Lily.mp3',
        artwork: 'http://localhost:3000/image/AlanWalker_Lily.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'thank u, next',
        artist: 'Ariana Grande',
        album: 'thank u, next',
        track: 1,
        url: 'http://localhost:3000/audio/Ariana_thanku_next.mp3',
        artwork: 'http://localhost:3000/image/Ariana_thanku_next.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Kill This Love',
        artist: 'Blackpink',
        album: 'Kill This Love',
        track: 1,
        url: 'http://localhost:3000/audio/Blackpink_Kiss_This_Love.mp3',
        artwork: 'http://localhost:3000/image/Blackpink_Kiss_This_Love.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'As If Its Your Last',
        artist: 'Blackpink',
        album: 'BlackPink In Your Area',
        track: 1,
        url: 'http://localhost:3000/audio/BLACKPINK_AS_IF_ITS_YOUR_LAST.mp3',
        artwork: 'http://localhost:3000/image/BLACKPINK_AS_IF_ITS_YOUR_LAST.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Bury a Friend',
        artist: 'Billie Elish',
        album: 'When We all Fall Asleep, Where Do We Go',
        track: 1,
        url: 'http://localhost:3000/audio/Billie_Eilish_Bury_a_Friend.mp3',
        artwork: 'http://localhost:3000/image/Billie_Eilish_Bury_a_Friend.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Sugar',
        artist: 'Maroon 5',
        album: 'V',
        track: 1,
        url: 'http://localhost:3000/audio/Maroon_5_Sugar.mp3',
        artwork: 'http://localhost:3000/image/Maroon_5_Sugar.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Girls Like You',
        artist: 'Maroon 5 ft. Cardi B',
        album: 'Red Pill Blues',
        track: 1,
        url: 'http://localhost:3000/audio/Maroon_5_Girls_Like_You.mp3',
        artwork: 'http://localhost:3000/image/Maroon_5_Girls_Like_You.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'High Hopes',
        artist: 'Panic! At The Disco',
        album: 'Pray for The Wicked',
        track: 1,
        url: 'http://localhost:3000/audio/Panic!_At_The_Disco_High_Hopes.mp3',
        artwork: 'http://localhost:3000/image/Panic!_At_The_Disco_High_Hopes.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'I Dont Care',
        artist: 'Ed Sheeran & Justin Bieber',
        album: 'I Dont Care',
        track: 1,
        url: 'http://localhost:3000/audio/Ed_Sheeran_I_Dont_Care.mp3',
        artwork: 'http://localhost:3000/image/Ed_Sheeran_I_Dont_Care.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'On My Way',
        artist: 'Alan Walker, Sabrina & Carpenter Farruko',
        album: 'On My Way',
        track: 1,
        url: 'http://localhost:3000/audio/on_my_way.mp3',
        artwork: 'http://localhost:3000/image/on_my_way.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('songs', null, [])
  }
};
