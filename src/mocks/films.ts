export type Film = {
  id: string;
  addedToList: boolean;
  title: string;
  imageBackgroundPath: string;
  imagePosterPath: string;
  videoPath: string;
  genre: string;
  year: number;
  rating: {
    score: number;
    level: string;
    reviewsCount: number;
  };
  info: {
    director: string;
    starring: string;
    description: string;
  };
}


const films : Film[] = [
  {
    id: '0',
    addedToList: false,
    title: 'The Grand Budapest Hotel',
    imageBackgroundPath: 'img/bg-the-grand-budapest-hotel.jpg',
    imagePosterPath: 'img/the-grand-budapest-hotel-poster.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: 'Drama',
    year: 2014,
    rating: {
      score: 8.9,
      level: 'Very Good',
      reviewsCount: 240
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },
  {
    id: '1',
    addedToList: true,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    imageBackgroundPath: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    imagePosterPath: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '2',
    addedToList: true,
    title: 'Bohemian Rhapsody',
    imageBackgroundPath: 'img/bohemian-rhapsody.jpg',
    imagePosterPath: 'img/bohemian-rhapsody.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '3',
    addedToList: true,
    title: 'Macbeth',
    imageBackgroundPath: 'img/macbeth.jpg',
    imagePosterPath: 'img/macbeth.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '4',
    addedToList: true,
    title: 'Aviator',
    imageBackgroundPath: 'img/aviator.jpg',
    imagePosterPath: 'img/aviator.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '5',
    addedToList: true,
    title: 'We need to talk about Kevin',
    imageBackgroundPath: 'img/we-need-to-talk-about-kevin.jpg',
    imagePosterPath: 'img/we-need-to-talk-about-kevin.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '6',
    addedToList: true,
    title: 'What We Do in the Shadows',
    imageBackgroundPath: 'img/what-we-do-in-the-shadows.jpg',
    imagePosterPath: 'img/what-we-do-in-the-shadows.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '7',
    addedToList: true,
    title: 'Revenant',
    imageBackgroundPath: 'img/revenant.jpg',
    imagePosterPath: 'img/revenant.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '8',
    addedToList: true,
    title: 'Johnny English',
    imageBackgroundPath: 'img/johnny-english.jpg',
    imagePosterPath: 'img/johnny-english.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '9',
    addedToList: true,
    title: 'Shutter Island',
    imageBackgroundPath: 'img/shutter-island.jpg',
    imagePosterPath: 'img/shutter-island.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '10',
    addedToList: false,
    title: 'Pulp Fiction',
    imageBackgroundPath: 'img/pulp-fiction.jpg',
    imagePosterPath: 'img/pulp-fiction.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '11',
    addedToList: true,
    title: 'No Country for Old Men',
    imageBackgroundPath: 'img/no-country-for-old-men.jpg',
    imagePosterPath: 'img/no-country-for-old-men.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '12',
    addedToList: false,
    title: 'Snatch',
    imageBackgroundPath: 'img/snatch.jpg',
    imagePosterPath: 'img/snatch.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '13',
    addedToList: false,
    title: 'Moonrise Kingdom',
    imageBackgroundPath: 'img/moonrise-kingdom.jpg',
    imagePosterPath: 'img/moonrise-kingdom.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '14',
    addedToList: false,
    title: 'Seven Years in Tibet',
    imageBackgroundPath: 'img/seven-years-in-tibet.jpg',
    imagePosterPath: 'img/seven-years-in-tibet.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '15',
    addedToList: false,
    title: 'Midnight Special',
    imageBackgroundPath: 'img/midnight-special.jpg',
    imagePosterPath: 'img/midnight-special.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '16',
    addedToList: false,
    title: 'War of the Worlds',
    imageBackgroundPath: 'img/war-of-the-worlds.jpg',
    imagePosterPath: 'img/war-of-the-worlds.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '17',
    addedToList: false,
    title: 'Dardjeeling Limited',
    imageBackgroundPath: 'img/dardjeeling-limited.jpg',
    imagePosterPath: 'img/dardjeeling-limited.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '18',
    addedToList: false,
    title: 'Orlando',
    imageBackgroundPath: 'img/orlando.jpg',
    imagePosterPath: 'img/orlando.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '19',
    addedToList: false,
    title: 'Mindhunter',
    imageBackgroundPath: 'img/mindhunter.jpg',
    imagePosterPath: 'img/mindhunter.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },

  {
    id: '20',
    addedToList: false,
    title: 'Midnight Special',
    imageBackgroundPath: 'img/midnight-special.jpg',
    imagePosterPath: 'img/midnight-special.jpg',
    videoPath: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: '',
    year: 2014,
    rating: {
      score: Math.floor(Math.random() * 100) / 10,
      level: 'Very Good',
      reviewsCount: 100 + Math.floor(Math.random() * 100)
    },
    info: {
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge ' +
        'Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39s friend and protege.\nGustave prides ' +
        'himself on providing first-class service to the hotel&#39s guests, including satisfying the sexual needs of ' +
        'the many elderly women who stay there. When one of Gustave&#39s lovers dies mysteriously, Gustave finds ' +
        'himself the recipient of a priceless painting and the chief suspect in her murder.'
    }
  },
];

export default films;
