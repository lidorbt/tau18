const filmsData = [
  {
    key: 'Festival2018Videos',
    imageSrc: '../assets/Festival2018Videos.png',
    name: 'Festival 2018 Videos',
    films: [
      {
        name: 'Festival Teaser',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/festival-videos/FestivalTeaser.png',
        directorEditor: 'Daniella Meroz',
        cinematographer: 'Misha Kaminsky',
      },
      {
        name: 'Festival Highlights',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/festival-videos/FestivalHighlights.png',
        directorEditor: 'Michael Morozov',
      },
      {
        name: 'Before The Action',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/festival-videos/BeforeTheAction.png',
        directorEditor: 'Gosha Demin',
      },
    ]
  },

  {
    key: 'DigitalMedia',
    imageSrc: '../assets/DigitalMedia.png',
    name: 'Digital Media',
    films: [
      {
        name: 'Homescape',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/digital-media/Homescape.jpg',
        titles: ['BEST PROJECT'],
        director: 'Yotam Rozin',
      },
    ]
  },

  {
    key: 'SelectionByTheIsraeliFilmCriticsAssociation',
    imageSrc: '../assets/SelectionByTheIsraeliFilmCriticsAssociation.png',
    name: 'Selection By The Israeli Film Critics Association',
    leftHeader: 'BEST FILM',
    rightHeader: 'SPECIAL MENTIONS',
    films: [
      {
        name: 'Love',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/selection-by-the-israeli-film-critics-association/Love.png',
        creator: 'Paz Bernstein',
        from: 'School of Audio & Visual Arts, Sapir College',
      },
      {
        name: "My Father's Son",
        videoUrl: '',
        imageUrl: '../assets/videoAssets/selection-by-the-israeli-film-critics-association/MyFathersSon.jpg',
        director: 'Hillel Rate',
        from: "The Ma'aleh School of Television, Film & Arts, Jerusalem",
      },
      {
        name: 'Lump In The Throat',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/selection-by-the-israeli-film-critics-association/LumpInTheThroat.png',
        creator: 'Muli Asido',
        from: 'School of Audio & Visual Arts, Sapir College',
      },
      {
        name: 'Dayenu',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/selection-by-the-israeli-film-critics-association/Dayenu.jpg',
        director: 'Naomi Meroz',
        from: 'Steve Tisch School of Film & Television, Tel Aviv University',
      },
      {
        name: 'Hunting Game',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/selection-by-the-israeli-film-critics-association/HuntingGame.png',
        creator: 'Erica Cumpton',
        from: 'School of Audio & Visual Arts, Sapir College',
      },
      {
        name: 'Well Done',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/selection-by-the-israeli-film-critics-association/WellDone.png',
        director: 'Omer Ben Simon',
        from: 'Steve Tisch School of Film & Television, Tel Aviv University',
      },
    ]
  },

  {
    key: 'InternationalCometition',
    imageSrc: '../assets/InternationalCometition.png',
    name: 'International Cometition',
    films: [
      {
        name: 'Invisibly',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/international-cometition/Invisibly.jpg',
        titles: ['BEST FILM'],
        director: 'Áron Szentpéteri',
        from: 'University of Theatre and Film Arts, Budapest'
      },
      {
        name: 'Where The SummerGoes',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/international-cometition/WhereTheSummerGoes.jpg',
        titles: ['BEST EDITING'],
        editor: 'Laura Gama Martins',
        director: 'Pinheiro Vicente',
        from: 'Lisbon Theatre and Film School, Purtugal'
      },
      {
        name: 'Excuse Me',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/international-cometition/ExcuseMe.jpg',
        titles: ['BEST SCRIPT'],
        subTitles: ['COURTESY OF BLACKPILLS'],
        directorScreenwriter: 'Bernhard Wenger',
        from: 'Film Academy Vienna, Austria'
      },
      {
        name: 'Luli',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/international-cometition/Luli.jpg',
        titles: ['SPECIAL MENTION: BEST PERFORMANCE'],
        cast: "Yuval Carmel & Ma'ayan Turgeman",
        director: 'Yair Fridman, Hadar Saifan',
        from: 'Beit Berl College, Israel'
      },
      {
        name: 'An Act Of Love',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/international-cometition/AnActOfLove.jpg',
        titles: ['BEST CINEMATOGRAPHY'],
        cinematography: 'Sky Davies',
        director: 'Lucy Knox',
        from: 'Film and Television Department, Melbourne University, Australia'
      },
    ]
  },

  {
    key: 'IsraeliCompetition',
    imageSrc: '../assets/IsraeliCompetition.png',
    name: 'Israeli Competition',
    films: [
      {
        name: 'Well Done',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/israeli-competition/WellDone.png',
        titles: ['BEST FILM'],
        subTitles: ['AWARDED BY THE MAYOR OF TEL AVIV-YAFO'],
        director: 'Omer Ben Simon, Aryeh Hasfari',
        from: 'Steve Tisch School of Film & Television, Tel Aviv University',
      },
      {
        name: 'A Love  Letter',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/israeli-competition/ALoveLtter.png',
        titles: ['BEST ANIMATION'],
        subTitles: ["COURTESY OF ISRAELI ANIMATORS' UNION"],
        director: 'Rachel Gutgarts',
        from: 'Bezalel Academy of Arts & Design, Jerusalem',
      },
      {
        name: 'The Bear',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/israeli-competition/TheBear.jpg',
        titles: ['BEST ARTISTIC DESIGN'],
        subTitles: ['COURTESY OF RENUAR'],
        director: 'Doreen Shwartzman',
        from: 'Bezalel Academy of Arts & Design, Jerusalem',
      },
      {
        name: 'A Meaningful Job',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/israeli-competition/AMeaningfulJob.png',
        titles: ['BEST SCRIPT', 'AUDIENCE AWARD'],
        subTitles: ["COURTESY OF THE SCRIPTWRITERS' GUILD OF ISRAEL", 'COURTESY OF ANONYMOUS'],
        screenwriterDirector: 'Shira Florentin',
        from: 'Sam Spiegel Film & Television School, Jerusalem',
      },
      {
        name: 'Asa Turns 13',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/israeli-competition/Asa13.jpg',
        titles: ['BEST CINEMATOGRAPHY'],
        subTitles: ['COURTESY OF ISRAIR - SONY'],
        cinematography: 'Naama Bunimovitz',
        director: 'Sali Elimelech',
        from: 'School of Audio & Visual Arts, Sapir College',
      },
      {
        name: 'The Men Behind the Wall',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/israeli-competition/TheMenBehind.jpg',
        titles: ['SPECIAL MENTION'],
        subTitles: ["COURTESY OF THE EDITORS' GUILD OF ISRAEL"],
        director: 'Ines Moldavsky',
        from: 'Bezalel Academy of Arts & Design, Jerusalem',
      },
      {
        name: 'Oshri',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/israeli-competition/Oshri.jpg',
        titles: ['BEST EDITING'],
        subTitles: ["COURTESY OF THE EDITORS' GUILD OF ISRAEL"],
        editor: 'Shira Meishar',
        director: 'Lihi Sabag',
        from: "The Ma'aleh School of Television, Film & Arts, Jerusalem",
      },
      {
        name: 'Two of a Kind',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/israeli-competition/TwoOfAKind.jpg',
        titles: ['SPECIAL MENTION: ANIMATION'],
        subTitles: ['COURTESY OF THE ISRAELI UNION OF PERFORMING ARTISTS'],
        director: 'Efrat Chen, Naor Zana & Neta Bar',
        from: 'School of Audio & Visual Arts, Sapir College',
      },
      {
        name: 'The Child',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/israeli-competition/TheChild.jpeg',
        titles: ['BEST EDITING'],
        subTitles: ['COURTESY OF THE ISRAELI UNION OF PERFORMING ARTISTS'],
        actor: 'Anastasia Fein',
        director: 'Daria Turetski',
        from: 'Steve Tisch School of Film & Television, Tel Aviv University',
      },
    ]
  },
  {
    key: 'IndependentShortFilmCompetition',
    imageSrc: '../assets/IndependentShortFilmCompetition.png',
    name: 'Independent Short Film Competition',
    films: [
      {
        name: 'Intergalactic Samurai',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/israeli-competition/IntergalacticSamurai.jpg',
        titles: ['BEST FILM'],
        director: 'Hagar Ben-Asher',
        production: 'Kobi Azran',
      },
      {
        name: 'Old Thing',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/israeli-competition/OldThing.jpg',
        titles: ['BEST SPECIAL MENTION & AUDIENCE AWARD'],
        subTitles: ['COURTESY OF ANONYMOUS FAMILY'],
        director: 'Roni Bahat',
        production: 'Nevo Jakobovitch and Tamar Alon',
      },
      {
        name: 'Shmama',
        videoUrl: '',
        imageUrl: '../assets/videoAssets/israeli-competition/Shmama.jpg',
        titles: ['BEST DIRECTING'],
        director: 'Miki Polonski',
        production: 'Kobi Mizrahi',
      },
    ]
  },
]

export default filmsData