const chordsList = {
  'A♭': {
    Major: {
      name: 'A♭',
      positions: '43111X',
      fingers: '------'
    },
    minor: {
      name: 'A♭m',
      positions: '466444',
      fingers: '------'
    },
    6: {
      name: 'A♭6',
      positions: 'X31111',
      fingers: '------'
    },
    7: {
      name: 'A♭7',
      positions: 'XX1112',
      fingers: '------'
    },
    9: {
      name: 'A♭9',
      positions: '43434X',
      fingers: '------'
    },
    m6: {
      name: 'A♭m6',
      positions: '4X344X',
      fingers: '------'
    },
    m7: {
      name: 'A♭m7',
      positions: '464444',
      fingers: '------'
    },
    maj7: {
      name: '465544',
      positions: 'X02120',
      fingers: '------'
    },
    dim: {
      name: '42X43X',
      positions: 'XX1212',
      fingers: '------'
    },
    "+": {
      name: 'A♭+',
      positions: '43X34X',
      fingers: '------'
    },
    "sus": {
      name: 'A♭sus',
      positions: 'XX1124',
      fingers: '------'
    }
  },
  A: {
    Major: {
      name: 'A',
      positions: 'X02220',
      fingers: '--123-'
    },
    minor: {
      name: 'Am',
      positions: 'X02210',
      fingers: '--231-'
    },
    6: {
      name: 'A6',
      positions: 'X02222',
      fingers: '------'
    },
    7: {
      name: 'A7',
      positions: 'X02223',
      fingers: '------'
    },
    9: {
      name: 'A9',
      positions: 'X02423',
      fingers: '------'
    },
    m6: {
      name: 'Am6',
      positions: 'X02213',
      fingers: '------'
    },
    m7: {
      name: 'Am7',
      positions: 'X02213',
      fingers: '------'
    },
    maj7: {
      name: 'Amaj7',
      positions: 'X02120',
      fingers: '------'
    },
    dim: {
      name: 'Adim',
      positions: 'XX1212',
      fingers: '------'
    },
    "+": {
      name: 'A+',
      positions: 'X03221',
      fingers: '------'
    },
    "sus": {
      name: 'Asus',
      positions: 'X02230',
      fingers: '------'
    },
  },
  'B♭': {
    Major: {
      name: 'B♭',
      positions: 'x13331',
      fingers: '------'
    },
    minor: {
      name: 'B♭m',
      positions: 'x13321',
      fingers: '------'
    },
    6: {
      name: 'B♭6',
      positions: 'x13333',
      fingers: '------'
    },
    7: {
      name: 'B♭7',
      positions: 'x13131',
      fingers: '------'
    },
    9: {
      name: 'B♭9',
      positions: 'x10111',
      fingers: '------'
    },
    m6: {
      name: 'B♭m6',
      positions: 'x13x23',
      fingers: '------'
    },
    m7: {
      name: 'B♭m7',
      positions: 'x13121',
      fingers: '------'
    },
    maj7: {
      name: 'B♭maj7',
      positions: 'x13231',
      fingers: '------'
    },
    dim: {
      name: 'B♭dim',
      positions: 'x1232x',
      fingers: '------'
    },
    "+": {
      name: 'B♭+',
      positions: 'x10311',
      fingers: '------'
    },
    "sus": {
      name: 'B♭sus',
      positions: 'x13341',
      fingers: '------'
    }
  },
  B: {
    Major: {
      name: 'B',
      positions: '224442',
      fingers: '------'
    },
    minor: {
      name: 'Bm',
      positions: '224432',
      fingers: '------'
    },
    6: {
      name: 'B6',
      positions: 'x2110x',
      fingers: '------'
    },
    7: {
      name: 'B7',
      positions: 'x21202',
      fingers: '------'
    },
    9: {
      name: 'B9',
      positions: 'x21222',
      fingers: '------'
    },
    m6: {
      name: 'Bm6',
      positions: '220102',
      fingers: '------'
    },
    m7: {
      name: 'Bm7',
      positions: '224232',
      fingers: '------'
    },
    maj7: {
      name: 'Bmaj7',
      positions: '224342',
      fingers: '------'
    },
    dim: {
      name: 'Bdim',
      positions: 'x20x01',
      fingers: '------'
    },
    "+": {
      name: 'B+',
      positions: 'x21x22',
      fingers: '------'
    },
    "sus": {
      name: 'Bsus',
      positions: '224452',
      fingers: '------'
    }
  },
  C: {
    Major: {
      name: 'C',
      positions: 'x32010',
      fingers: '------'
    },
    minor: {
      name: 'Cm',
      positions: 'x31013',
      fingers: '------'
    },
    6: {
      name: 'C6',
      positions: 'x32210',
      fingers: '------'
    },
    7: {
      name: 'C7',
      positions: 'x32310',
      fingers: '------'
    },
    9: {
      name: 'C9',
      positions: '332333',
      fingers: '------'
    },
    m6: {
      name: 'Cm6',
      positions: 'x31213',
      fingers: '------'
    },
    m7: {
      name: 'Cm7',
      positions: 'x3134x',
      fingers: '------'
    },
    maj7: {
      name: 'Cmaj7',
      positions: '332000',
      fingers: '------'
    },
    dim: {
      name: 'Cdim',
      positions: 'x31x12',
      fingers: '------'
    },
    "+": {
      name: 'C+',
      positions: 'x32030',
      fingers: '------'
    },
    "sus": {
      name: 'Csus',
      positions: 'x33011',
      fingers: '------'
    }
  },
  'D♭': {
    Major: {
      name: 'D♭',
      positions: 'x43121',
      fingers: '------'
    },
    minor: {
      name: 'D♭m',
      positions: 'x4212x',
      fingers: '------'
    },
    6: {
      name: 'D♭6',
      positions: 'x4332x',
      fingers: '------'
    },
    7: {
      name: 'D♭7',
      positions: 'x4342x',
      fingers: '------'
    },
    9: {
      name: 'D♭9',
      positions: '443444',
      fingers: '------'
    },
    m6: {
      name: 'D♭m6',
      positions: 'x42324',
      fingers: '------'
    },
    m7: {
      name: 'D♭m7',
      positions: 'x46454',
      fingers: '------'
    },
    maj7: {
      name: 'D♭maj7',
      positions: 'x43111',
      fingers: '------'
    },
    dim: {
      name: 'D♭dim',
      positions: 'x42x23',
      fingers: '------'
    },
    "+": {
      name: 'D♭+',
      positions: 'x43141',
      fingers: '------'
    },
    "sus": {
      name: 'D♭sus',
      positions: 'x4412x',
      fingers: '------'
    }
  },
  D: {
    Major: {
      name: 'D',
      positions: 'xx0232',
      fingers: '------'
    },
    minor: {
      name: 'Dm',
      positions: 'xx0231',
      fingers: '------'
    },
    6: {
      name: 'D6',
      positions: 'xx0202',
      fingers: '------'
    },
    7: {
      name: 'D7',
      positions: 'xx0212',
      fingers: '------'
    },
    9: {
      name: 'D9',
      positions: '554555',
      fingers: '------'
    },
    m6: {
      name: 'Dm6',
      positions: 'xx0201',
      fingers: '------'
    },
    m7: {
      name: 'Dm7',
      positions: 'xx0211',
      fingers: '------'
    },
    maj7: {
      name: 'Dmaj7',
      positions: 'xx0222',
      fingers: '------'
    },
    dim: {
      name: 'Ddim',
      positions: 'xx01x1',
      fingers: '------'
    },
    "+": {
      name: 'D+',
      positions: 'x54252',
      fingers: '------'
    },
    "sus": {
      name: 'Dsus',
      positions: 'xx0233',
      fingers: '------'
    }
  },
  'E♭': {
    Major: {
      name: 'E♭',
      positions: 'xx1343',
      fingers: '------'
    },
    minor: {
      name: 'E♭m',
      positions: 'xx1342',
      fingers: '------'
    },
    6: {
      name: 'E♭6',
      positions: 'xx1313',
      fingers: '------'
    },
    7: {
      name: 'E♭7',
      positions: 'xx1323',
      fingers: '------'
    },
    9: {
      name: 'E♭9',
      positions: 'xx1021',
      fingers: '------'
    },
    m6: {
      name: 'E♭m6',
      positions: 'x11312',
      fingers: '------'
    },
    m7: {
      name: 'E♭m7',
      positions: 'xx1322',
      fingers: '------'
    },
    maj7: {
      name: 'E♭maj7',
      positions: 'x11333',
      fingers: '------'
    },
    dim: {
      name: 'E♭dim',
      positions: 'xx12x2',
      fingers: '------'
    },
    "+": {
      name: 'E♭+',
      positions: 'x65363',
      fingers: '------'
    },
    "sus": {
      name: 'E♭sus',
      positions: 'xx1344',
      fingers: '------'
    }
  },
  E: {
    Major: {
      name: 'E',
      positions: '022100',
      fingers: '------'
    },
    minor: {
      name: 'Em',
      positions: '022000',
      fingers: '------'
    },
    6: {
      name: 'E6',
      positions: '022120',
      fingers: '------'
    },
    7: {
      name: 'E7',
      positions: '020100',
      fingers: '------'
    },
    9: {
      name: 'E9',
      positions: '020102',
      fingers: '------'
    },
    m6: {
      name: 'Em6',
      positions: '022020',
      fingers: '------'
    },
    m7: {
      name: 'Em7',
      positions: '020000',
      fingers: '------'
    },
    maj7: {
      name: 'Emaj7',
      positions: '021100',
      fingers: '------'
    },
    dim: {
      name: 'Edim',
      positions: 'xx23x3',
      fingers: '------'
    },
    "+": {
      name: 'E+',
      positions: '022102',
      fingers: '------'
    },
    "sus": {
      name: 'Esus',
      positions: '022200',
      fingers: '------'
    }
  },
  F: {
    Major: {
      name: 'F',
      positions: '133211',
      fingers: '------'
    },
    minor: {
      name: 'Fm',
      positions: '133111',
      fingers: '------'
    },
    6: {
      name: 'F6',
      positions: '1x3231',
      fingers: '------'
    },
    7: {
      name: 'F7',
      positions: '131211',
      fingers: '------'
    },
    9: {
      name: 'F9',
      positions: '131213',
      fingers: '------'
    },
    m6: {
      name: 'Fm6',
      positions: '1x0111',
      fingers: '------'
    },
    m7: {
      name: 'Fm7',
      positions: '131111',
      fingers: '------'
    },
    maj7: {
      name: 'Fmaj7',
      positions: 'xx3210',
      fingers: '------'
    },
    dim: {
      name: 'Fdim',
      positions: 'xx34x4',
      fingers: '------'
    },
    "+": {
      name: 'F+',
      positions: 'xx3213',
      fingers: '------'
    },
    "sus": {
      name: 'Fsus',
      positions: '133311',
      fingers: '------'
    }
  },
  'F♯': {
    Major: {
      name: 'F♯',
      positions: '244322',
      fingers: '------'
    },
    minor: {
      name: 'F♯m',
      positions: '244222',
      fingers: '------'
    },
    6: {
      name: 'F♯6',
      positions: '2x132x',
      fingers: '------'
    },
    7: {
      name: 'F♯7',
      positions: '242322',
      fingers: '------'
    },
    9: {
      name: 'F♯9',
      positions: '242324',
      fingers: '------'
    },
    m6: {
      name: 'F♯m6',
      positions: '2x1222',
      fingers: '------'
    },
    m7: {
      name: 'F♯m7',
      positions: '242222',
      fingers: '------'
    },
    maj7: {
      name: 'F♯maj7',
      positions: '243322',
      fingers: '------'
    },
    dim: {
      name: 'F♯dim',
      positions: '20x21x',
      fingers: '------'
    },
    "+": {
      name: 'F♯+',
      positions: '21x122',
      fingers: '------'
    },
    "sus": {
      name: 'F♯sus',
      positions: '244422',
      fingers: '------'
    }
  },
  G: {
    Major: {
      name: 'G',
      positions: '320003',
      fingers: '------'
    },
    minor: {
      name: 'Gm',
      positions: '310033',
      fingers: '------'
    },
    6: {
      name: 'G6',
      positions: '320000',
      fingers: '------'
    },
    7: {
      name: 'G7',
      positions: '320001',
      fingers: '------'
    },
    9: {
      name: 'G9',
      positions: '300001',
      fingers: '------'
    },
    m6: {
      name: 'Gm6',
      positions: '3x2333',
      fingers: '------'
    },
    m7: {
      name: 'Gm7',
      positions: '353333',
      fingers: '------'
    },
    maj7: {
      name: 'Gmaj7',
      positions: '320002',
      fingers: '------'
    },
    dim: {
      name: 'Gdim',
      positions: '31x32x',
      fingers: '------'
    },
    "+": {
      name: 'G+',
      positions: '300203',
      fingers: '------'
    },
    "sus": {
      name: 'Gsus',
      positions: '330013',
      fingers: '------'
    }
  },
}

export default chordsList