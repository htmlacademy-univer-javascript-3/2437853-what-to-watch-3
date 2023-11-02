import {Film} from '../types/film';


const films: Film[] = [
  {
    id: '0',
    name: 'The Grand Budapest Hotel',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: 'Drama',
    released: 2014,
    isFavorite: false,
  },
  {
    id: '1',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: true,
  },

  {
    id: '2',
    name: 'Bohemian Rhapsody',
    posterImage: 'img/bohemian-rhapsody.jpg',
    backgroundImage: 'img/bohemian-rhapsody.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: true,
  },

  {
    id: '3',
    name: 'Macbeth',
    posterImage: 'img/macbeth.jpg',
    backgroundImage: 'img/macbeth.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: true,
  },

  {
    id: '4',
    name: 'Aviator',
    posterImage: 'img/aviator.jpg',
    backgroundImage: 'img/aviator.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: true,
  },

  {
    id: '5',
    name: 'We need to talk about Kevin',
    posterImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: true,
  },

  {
    id: '6',
    name: 'What We Do in the Shadows',
    posterImage: 'img/what-we-do-in-the-shadows.jpg',
    backgroundImage: 'img/what-we-do-in-the-shadows.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: true,
  },

  {
    id: '7',
    name: 'Revenant',
    posterImage: 'img/revenant.jpg',
    backgroundImage: 'img/revenant.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: true,
  },

  {
    id: '8',
    name: 'Johnny English',
    posterImage: 'img/johnny-english.jpg',
    backgroundImage: 'img/johnny-english.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: true,
  },

  {
    id: '9',
    name: 'Shutter Island',
    posterImage: 'img/shutter-island.jpg',
    backgroundImage: 'img/shutter-island.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: true,
  },

  {
    id: '10',
    name: 'Pulp Fiction',
    posterImage: 'img/pulp-fiction.jpg',
    backgroundImage: 'img/pulp-fiction.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: false,
  },

  {
    id: '11',
    name: 'No Country for Old Men',
    posterImage: 'img/no-country-for-old-men.jpg',
    backgroundImage: 'img/no-country-for-old-men.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: true,
  },

  {
    id: '12',
    name: 'Snatch',
    posterImage: 'img/snatch.jpg',
    backgroundImage: 'img/snatch.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: false,
  },

  {
    id: '13',
    name: 'Moonrise Kingdom',
    posterImage: 'img/moonrise-kingdom.jpg',
    backgroundImage: 'img/moonrise-kingdom.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: false,
  },

  {
    id: '14',
    name: 'Seven Years in Tibet',
    posterImage: 'img/seven-years-in-tibet.jpg',
    backgroundImage: 'img/seven-years-in-tibet.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: false,
  },

  {
    id: '15',
    name: 'Midnight Special',
    posterImage: 'img/midnight-special.jpg',
    backgroundImage: 'img/midnight-special.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: false,
  },

  {
    id: '16',
    name: 'War of the Worlds',
    posterImage: 'img/war-of-the-worlds.jpg',
    backgroundImage: 'img/war-of-the-worlds.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: false,
  },

  {
    id: '17',
    name: 'Dardjeeling Limited',
    posterImage: 'img/dardjeeling-limited.jpg',
    backgroundImage: 'img/dardjeeling-limited.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: false,
  },

  {
    id: '18',
    name: 'Orlando',
    posterImage: 'img/orlando.jpg',
    backgroundImage: 'img/orlando.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: false,
  },

  {
    id: '19',
    name: 'Mindhunter',
    posterImage: 'img/mindhunter.jpg',
    backgroundImage: 'img/mindhunter.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: false,
  },

  {
    id: '20',
    name: 'Midnight Special',
    posterImage: 'img/midnight-special.jpg',
    backgroundImage: 'img/midnight-special.jpg',
    backgroundColor: '#000',
    videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
      'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
      'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
      'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
      'himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: Math.floor(Math.random() * 100) / 10,
    scoresCount: 100 + Math.floor(Math.random() * 100),
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: '',
    released: 2014,
    isFavorite: false,
  },
];

export default films;
