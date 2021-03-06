const _ = require('lodash')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      smoke: {
        'a50': 'rgba(255,255,255,.5)',
        'a67': 'rgba(255,255,255,.67)',
      },
      black: '#000',
      gray: {
        100: '#707070',
        '100a10': 'rgba(112,112,112,.1)',
        '100a20': 'rgba(112,112,112,.2)',
        '100a50': 'rgba(112,112,112,.5)',
        200: '#f7f7f7',
        300: '#dedede',
        400: '#727272',
        500: '#6e6e6e',
        600: '#797f7e',
        '600a20': 'rgba(121,127,126,.2)'
      },
      green: {
        100: '#009259',
        '100a2': 'rgba(0,146,89,.2)',
        200: '#65b031', // light green for hover
        300: '#9ed840',
        400: '#8ac635',
      },
      orange: {
        100: '#F36A10',
      },
      red: {
        100: '#FF6767',
        200: '#d84d32',
        300: '#9e182f',
        '300a5': 'rgba(158,24,47,.5)',
      },
      blue: {
        100: '#3b589d'
      }
    },
    spacingNegative: { // only for negative marging
      '-4p': '-4%',
      '-8p': '-8%',
      '-10p': '-10%',
      '-0': '-0',
      '-1': '-1px',
      '-2': '-2px',
      '-3': '-3px',
      '-4': '-4px',
      '-5': '-5px',
      '-6': '-6px',
      '-7': '-7px',
      '-8': '-8px',
      '-9': '-9px',
      '-10': '-10px',
      '-11': '-11px',
      '-12': '-12px',
      '-13': '-13px',
      '-14': '-14px',
      '-15': '-15px',
      '-16': '-16px',
      '-17': '-17px',
      '-18': '-18px',
      '-19': '-19px',
      '-20': '-20px',
      '-20': '-20px',
      '-21': '-21px',
      '-22': '-22px',
      '-23': '-23px',
      '-24': '-24px',
      '-25': '-25px',
      '-26': '-26px',
      '-27': '-27px',
      '-28': '-28px',
      '-29': '-29px',
      '-30': '-30px',
      '-31': '-31px',
      '-32': '-32px',
      '-33': '-33px',
      '-34': '-34px',
      '-35': '-35px',
      '-36': '-36px',
      '-37': '-37px',
      '-38': '-38px',
      '-39': '-39px',
      '-31': '-31px',
      '-32': '-32px',
      '-33': '-33px',
      '-34': '-34px',
      '-35': '-35px',
      '-36': '-36px',
      '-37': '-37px',
      '-38': '-38px',
      '-39': '-39px',
      '-40': '-40px',
      '-41': '-41px',
      '-42': '-42px',
      '-43': '-43px',
      '-44': '-44px',
      '-45': '-45px',
      '-46': '-46px',
      '-47': '-47px',
      '-48': '-48px',
      '-49': '-49px',
      '-41': '-41px',
      '-42': '-42px',
      '-43': '-43px',
      '-44': '-44px',
      '-45': '-45px',
      '-46': '-46px',
      '-47': '-47px',
      '-48': '-48px',
      '-49': '-49px',
      '-50': '-50px',
      '-51': '-51px',
      '-52': '-52px',
      '-53': '-53px',
      '-54': '-54px',
      '-55': '-55px',
      '-56': '-56px',
      '-57': '-57px',
      '-58': '-58px',
      '-59': '-59px',
      '-60': '-60px',
      '-61': '-61px',
      '-62': '-62px',
      '-63': '-63px',
      '-64': '-64px',
      '-65': '-65px',
      '-66': '-66px',
      '-67': '-67px',
      '-68': '-68px',
      '-69': '-69px',
      '-70': '-70px',
      '-70': '-70px',
      '-71': '-71px',
      '-72': '-72px',
      '-73': '-73px',
      '-74': '-74px',
      '-75': '-75px',
      '-76': '-76px',
      '-77': '-77px',
      '-78': '-78px',
      '-79': '-79px',
      '-80': '-80px',
      '-80': '-80px',
      '-81': '-81px',
      '-82': '-82px',
      '-83': '-83px',
      '-84': '-84px',
      '-85': '-85px',
      '-86': '-86px',
      '-87': '-87px',
      '-88': '-88px',
      '-89': '-89px',
      '-90': '-90px',
      '-90': '-90px',
      '-91': '-91px',
      '-92': '-92px',
      '-93': '-93px',
      '-94': '-94px',
      '-95': '-95px',
      '-96': '-96px',
      '-97': '-97px',
      '-98': '-98px',
      '-99': '-99px',
      '-100': '-100px',
      '-101': '-101px',
      '-102': '-102px',
      '-103': '-103px',
      '-104': '-104px',
      '-105': '-105px',
      '-106': '-106px',
      '-107': '-107px',
      '-108': '-108px',
      '-109': '-109px',
      '-110': '-110px',
      '-111': '-111px',
      '-112': '-112px',
      '-113': '-113px',
      '-114': '-114px',
      '-115': '-115px',
      '-116': '-116px',
      '-117': '-117px',
      '-118': '-118px',
      '-119': '-119px',
      '-120': '-120px',
      '-121': '-121px',
      '-122': '-122px',
      '-123': '-123px',
      '-124': '-124px',
      '-125': '-125px',
      '-126': '-126px',
      '-127': '-127px',
      '-128': '-128px',
      '-129': '-129px',
      '-130': '-130px',
      '-131': '-131px',
      '-132': '-132px',
      '-133': '-133px',
      '-134': '-134px',
      '-135': '-135px',
      '-136': '-136px',
      '-137': '-137px',
      '-138': '-138px',
      '-139': '-139px',
      '-140': '-140px',
      '-141': '-141px',
      '-142': '-142px',
      '-143': '-143px',
      '-144': '-144px',
      '-145': '-145px',
      '-146': '-146px',
      '-147': '-147px',
      '-148': '-148px',
      '-149': '-149px',
      '-150': '-150px',
      '-151': '-151px',
      '-152': '-152px',
      '-153': '-153px',
      '-154': '-154px',
      '-155': '-155px',
      '-156': '-156px',
      '-157': '-157px',
      '-158': '-158px',
      '-159': '-159px',
      '-160': '-160px',
      '-161': '-161px',
      '-162': '-162px',
      '-163': '-163px',
      '-164': '-164px',
      '-165': '-165px',
      '-166': '-166px',
      '-167': '-167px',
      '-168': '-168px',
      '-169': '-169px',
      '-170': '-170px',
      '-171': '-171px',
      '-172': '-172px',
      '-173': '-173px',
      '-174': '-174px',
      '-175': '-175px',
      '-176': '-176px',
      '-177': '-177px',
      '-178': '-178px',
      '-179': '-179px',
      '-180': '-180px',
      '-181': '-181px',
      '-182': '-182px',
      '-183': '-183px',
      '-184': '-184px',
      '-185': '-185px',
      '-186': '-186px',
      '-187': '-187px',
      '-188': '-188px',
      '-189': '-189px',
      '-190': '-190px',
      '-191': '-191px',
      '-192': '-192px',
      '-193': '-193px',
      '-194': '-194px',
      '-195': '-195px',
      '-196': '-196px',
      '-197': '-197px',
      '-198': '-198px',
      '-199': '-199px',
      '-200': '-200px',
      '-400': '-400px',
      '-600': '-600px',
    },
    spacing: {
      'px': '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
      '11': '11px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '17': '17px',
      '18': '18px',
      '19': '19px',
      '20': '20px',
      '20': '20px',
      '21': '21px',
      '22': '22px',
      '23': '23px',
      '24': '24px',
      '25': '25px',
      '26': '26px',
      '27': '27px',
      '28': '28px',
      '29': '29px',
      '30': '30px',
      '31': '31px',
      '32': '32px',
      '33': '33px',
      '34': '34px',
      '35': '35px',
      '36': '36px',
      '37': '37px',
      '38': '38px',
      '39': '39px',
      '31': '31px',
      '32': '32px',
      '33': '33px',
      '34': '34px',
      '35': '35px',
      '36': '36px',
      '37': '37px',
      '38': '38px',
      '39': '39px',
      '40': '40px',
      '41': '41px',
      '42': '42px',
      '43': '43px',
      '44': '44px',
      '45': '45px',
      '46': '46px',
      '47': '47px',
      '48': '48px',
      '49': '49px',
      '41': '41px',
      '42': '42px',
      '43': '43px',
      '44': '44px',
      '45': '45px',
      '46': '46px',
      '47': '47px',
      '48': '48px',
      '49': '49px',
      '50': '50px',
      '51': '51px',
      '52': '52px',
      '53': '53px',
      '54': '54px',
      '55': '55px',
      '56': '56px',
      '57': '57px',
      '58': '58px',
      '59': '59px',
      '60': '60px',
      '61': '61px',
      '62': '62px',
      '63': '63px',
      '64': '64px',
      '65': '65px',
      '66': '66px',
      '67': '67px',
      '68': '68px',
      '69': '69px',
      '70': '70px',
      '70': '70px',
      '71': '71px',
      '72': '72px',
      '73': '73px',
      '74': '74px',
      '75': '75px',
      '76': '76px',
      '77': '77px',
      '78': '78px',
      '79': '79px',
      '80': '80px',
      '80': '80px',
      '81': '81px',
      '82': '82px',
      '83': '83px',
      '84': '84px',
      '85': '85px',
      '86': '86px',
      '87': '87px',
      '88': '88px',
      '89': '89px',
      '90': '90px',
      '90': '90px',
      '91': '91px',
      '92': '92px',
      '93': '93px',
      '94': '94px',
      '95': '95px',
      '96': '96px',
      '97': '97px',
      '98': '98px',
      '99': '99px',
      '100': '100px',
      '101': '101px',
      '102': '102px',
      '103': '103px',
      '104': '104px',
      '105': '105px',
      '106': '106px',
      '107': '107px',
      '108': '108px',
      '109': '109px',
      '110': '110px',
      '111': '111px',
      '112': '112px',
      '113': '113px',
      '114': '114px',
      '115': '115px',
      '116': '116px',
      '117': '117px',
      '118': '118px',
      '119': '119px',
      '120': '120px',
      '121': '121px',
      '122': '122px',
      '123': '123px',
      '124': '124px',
      '125': '125px',
      '126': '126px',
      '127': '127px',
      '128': '128px',
      '129': '129px',
      '130': '130px',
      '131': '131px',
      '132': '132px',
      '133': '133px',
      '134': '134px',
      '135': '135px',
      '136': '136px',
      '137': '137px',
      '138': '138px',
      '139': '139px',
      '140': '140px',
      '141': '141px',
      '142': '142px',
      '143': '143px',
      '144': '144px',
      '145': '145px',
      '146': '146px',
      '147': '147px',
      '148': '148px',
      '149': '149px',
      '150': '150px',
      '151': '151px',
      '152': '152px',
      '153': '153px',
      '154': '154px',
      '155': '155px',
      '156': '156px',
      '157': '157px',
      '158': '158px',
      '159': '159px',
      '160': '160px',
      '161': '161px',
      '162': '162px',
      '163': '163px',
      '164': '164px',
      '165': '165px',
      '166': '166px',
      '167': '167px',
      '168': '168px',
      '169': '169px',
      '170': '170px',
      '171': '171px',
      '172': '172px',
      '173': '173px',
      '174': '174px',
      '175': '175px',
      '176': '176px',
      '177': '177px',
      '178': '178px',
      '179': '179px',
      '180': '180px',
      '181': '181px',
      '182': '182px',
      '183': '183px',
      '184': '184px',
      '185': '185px',
      '186': '186px',
      '187': '187px',
      '188': '188px',
      '189': '189px',
      '190': '190px',
      '191': '191px',
      '192': '192px',
      '193': '193px',
      '194': '194px',
      '195': '195px',
      '196': '196px',
      '197': '197px',
      '198': '198px',
      '199': '199px',
      '200': '200px',
      '201': '201px',
      '208': '208px',
      '210': '210px',
      '217': '217px',
      '222': '222px',
      '226': '226px',
      '230': '230px',
      '240': '240px',
      '245': '245px',
      '247': '247px',
      '250': '250px',
      '260': '260px',
      '268': '268px',
      '292': '292px',
      '296': '296px',
      '300': '300px',
      '324': '324px',
      '340': '340px',
      '344': '344px',
      '347': '347px',
      '367': '367px',
      '400': '400px',
      '412': '412px',
      '425': '425px',
      '476': '476px',
      '482': '482px',

      '500': '500px',
      '520': '520px',
      '544': '544px',
      '548': '548px',
      '580': '580px',
      '600': '600px',
      '630': '630px',
      '650': '650px',
      '670': '670px',
      '674': '674px',
      '731': '731px',
      '782': '782px',
      '869': '869px',
      '900': '900px',
      '951': '951px',
      '1060': '1060px',
      '1029': '1029px',
      '1180': '1180px',
      '1235': '1235px',
      '1270': '1270px',
      '1290': '1290px',
      '1400': '1400px',
      '1468': '1468px',
      '1506': '1506px',
      '1516': '1516px',
      '1645': '1645px',
      '1920': '1920px',
    },
    spacingPercent: {
      '1p': '1%',
      '2p': '2%',
      '3p': '3%',
      '4p': '4%',
      '5p': '5%',
      '6p': '6%',
      '7p': '7%',
      '8p': '8%',
      '9p': '9%',
      '10p': '10%',
      '11p': '11%',
      '11p7': '11.7%',
      '12p': '12%',
      '13p': '13%',
      '14p': '14%',
      '15p': '15%',
      '16p': '16%',
      '17p': '17%',
      '18p': '18%',
      '19p': '19%',
      '20p': '20%',
      '20p': '20%',
      '21p': '21%',
      '22p': '22%',
      '23p': '23%',
      '24p': '24%',
      '25p': '25%',
      '26p': '26%',
      '27p': '27%',
      '28p': '28%',
      '29p': '29%',
      '30p': '30%',
      '31p': '31%',
      '32p': '32%',
      '33p': '33%',
      '34p': '34%',
      '35p': '35%',
      '36p': '36%',
      '37p': '37%',
      '38p': '38%',
      '39p': '39%',
      '31p': '31%',
      '32p': '32%',
      '33p': '33%',
      '34p': '34%',
      '35p': '35%',
      '36p': '36%',
      '37p': '37%',
      '38p': '38%',
      '39p': '39%',
      '40p': '40%',
      '41p': '41%',
      '42p': '42%',
      '43p': '43%',
      '44p': '44%',
      '45p': '45%',
      '46p': '46%',
      '47p': '47%',
      '48p': '48%',
      '49p': '49%',
      '41p': '41%',
      '42p': '42%',
      '43p': '43%',
      '44p': '44%',
      '45p': '45%',
      '46p': '46%',
      '47p': '47%',
      '48p': '48%',
      '49p': '49%',
      '50p': '50%',
      '51p': '51%',
      '52p': '52%',
      '53p': '53%',
      '54p': '54%',
      '55p': '55%',
      '56p': '56%',
      '57p': '57%',
      '58p': '58%',
      '59p': '59%',
      '60p': '60%',
      '61p': '61%',
      '62p': '62%',
      '63p': '63%',
      '64p': '64%',
      '65p': '65%',
      '66p': '66%',
      '67p': '67%',
      '68p': '68%',
      '69p': '69%',
      '70p': '70%',
      '70p': '70%',
      '71p': '71%',
      '72p': '72%',
      '73p': '73%',
      '74p': '74%',
      '75p': '75%',
      '76p': '76%',
      '77p': '77%',
      '78p': '78%',
      '79p': '79%',
      '80p': '80%',
      '81p': '81%',
      '82p': '82%',
      '83p': '83%',
      '84p': '84%',
      '85p': '85%',
      '86p': '86%',
      '87p': '87%',
      '88p': '88%',
      '89p': '89%',
      '90p': '90%',
      '90p': '90%',
      '91p': '91%',
      '92p': '92%',
      '93p': '93%',
      '94p': '94%',
      '95p': '95%',
      '96p': '96%',
      '97p': '97%',
      '98p': '98%',
      '99p': '99%',
      full: '100%',
    },
    spacingGrid: {
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      '1/12': '8.333%',
      '2/12': '16.667%',
      '3/12': '25%',
      '4/12': '33.333%',
      '5/12': '41.667%',
      '6/12': '50%',
      '7/12': '58.333%',
      '8/12': '66.667%',
      '9/12': '75%',
      '10/12': '83.333%',
      '11/12': '91.667%',
      '12/12': '100%',
    },
    screens: {
      xs: '375px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1506px',
    },
    fontFamily: {
      sans: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
      'Menlo',
      'Monaco',
      'Consolas',
      '"Liberation Mono"',
      '"Courier New"',
      'monospace',
      ],
      agenda: [
        'agenda',
        'Roboto',
        '"Helvetica Neue"',
        'sans-serif',
      ],
      icomoon: [ 'icomoon' ]
    },
    fontSize: {
      'xs'  : '.75rem',     // 12px
      'sm'  : '.875rem',    // 14px
      'base': '1rem',     // 16px
      'lg'  : '1.125rem',   // 18px
      'xl'  : '1.25rem',    // 20px
      '2xl' : '1.5rem',    // 24px
      '3xl' : '1.875rem',  // 30px
      '4xl' : '2.25rem',   // 36px
      '5xl' : '3rem',      // 48px
      '6xl' : '3.75rem',   // 60px
      'f0'  : '0',
      'f6'  : '0.375rem',
      'f7'  : '0.44rem',
      'f8'  : '0.5rem',
      'f9'  : '0.5625rem',
      'f10' : '0.625rem',
      'f11' : '0.6875rem',
      'f12' : '0.75rem',
      'f13' : '0.8125rem',
      'f14' : '0.875rem',
      'f15' : '0.9375rem',
      'f16' : '1rem',
      'f17' : '1.063rem',
      'f18' : '1.125rem',
      'f19' : '1.1875rem',
      'f20' : '1.25rem',
      'f21' : '1.3125rem',
      'f22' : '1.375rem',
      'f23' : '1.4375rem',
      'f24' : '1.5rem',
      'f25' : '1.5625rem',
      'f26' : '1.625rem',
      'f27' : '1.6875rem',
      'f28' : '1.75rem',
      'f30' : '1.875rem',
      'f32' : '2rem',
      'f34' : '2.125rem',
      'f35' : '2.19rem',
      'f36' : '2.25rem',
      'f38' : '2.375rem',
      'f40' : '2.5rem',
      'f41' : '2.563rem',
      'f42' : '2.625rem',
      'f43' : '2.688rem',
      'f44' : '2.75rem',
      'f45' : '2.813rem',
      'f46' : '2.875rem',
      'f47' : '2.938rem',
      'f48' : '3rem',
      'f49' : '3.063rem',
      'f50' : '3.125rem',
      'f51' : '3.188rem',
      'f52' : '3.25rem',
      'f53' : '3.313rem',
      'f54' : '3.375rem',
      'f55' : '3.438rem',
      'f56' : '3.5rem',
      'f57' : '3.563rem',
      'f58' : '3.625rem',
      'f59' : '3.688rem',
      'f60' : '3.75rem',
      'f61' : '3.813rem',
      'f62' : '3.875rem',
      'f63' : '3.938rem',
      'f64' : '4rem',
      'f65' : '4.063rem',
      'f66' : '4.125rem',
      'f67' : '4.188rem',
      'f68' : '4.25rem',
      'f69' : '4.313rem',
      'f70' : '4.375rem',
      'f71' : '4.438rem',
      'f72' : '4.5rem',
      'f73' : '4.563rem',
      'f74' : '4.625rem',
      'f75' : '4.688rem',
      'f76' : '4.75rem',
      'f77' : '4.813rem',
      'f78' : '4.875rem',
      'f79' : '4.938rem',
      'f80' : '5rem',
      'f81' : '5.063rem',
      'f82' : '5.125rem',
      'f83' : '5.188rem',
      'f84' : '5.25rem',
      'f85' : '5.313rem',
      'f86' : '5.375rem',
      'f87' : '5.438rem',
      'f88' : '5.5rem',
      'f89' : '5.563rem',
      'f90' : '5.625rem',
      'f91' : '5.688rem',
      'f92' : '5.75rem',
      'f93' : '5.813rem',
      'f94' : '5.875rem',
      'f95' : '5.938rem',
      'f96' : '6rem',
      'f97' : '6.063rem',
      'f98' : '6.125rem',
      'f99' : '6.188rem',
      'f100' : '6.25rem'
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      none: 1,
      tighter: 1.25,
      tight: 1.375,
      snug: 1.4,
      medium: 1.5,
      normal: 1.583,
      relaxed: 1.625,
      body: 1.875,
      loose: 2,
      z93: 0.93,
      a04: 1.04,
      a12: 1.12,
      a13: 1.13,
      a14: 1.14,
      a17: 1.17,
      a2: 1.2,
      a23: 1.23,
      a27: 1.27,
      a33: 1.33,
      a35: 1.35,
      a38: 1.38,
      a44: 1.44,
      a57: 1.57,
      a6: 1.6,
    },
    letterSpacing: {
      tighter: '-2px',
      tight: '-1px',
      normal: '0',
      loose: '0.66px',
      looser: '0.79px',
      wide: '1px',
      wider: '2',
      widest: '3'
    },
    textColor: theme => theme('colors'),
    backgroundColor: theme => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '8': '8px',
    },
    borderColor: theme => {
      return global.Object.assign({ default: theme('colors.gray.300', 'currentColor') }, theme('colors'))
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      default: '.25rem',
      lg: '.5rem',
      full: '50%',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
      15: '15px',
      20: '20px',
      25: '25px',
      30: '30px',
      50: '50px',
      92: '92px',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      ...theme('spacingPercent'),
      ...theme('spacingGrid'),
      screen: '100vw',
      'c318': 'calc(100% - 318px)'
    }),
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      ...theme('spacingPercent'),
      screen: '100vh',
      'c67': 'calc(100% - 67px)',
      'screen-47': 'calc(100vh - 47px)',
      'screen-94': 'calc(100vh - 94px)',
    }),
    minWidth: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      ...theme('spacingPercent'),
      ...theme('spacingGrid'),
    }),
    minHeight: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      ...theme('spacingPercent'),
      'c200': 'calc(100% - 200px)',
    }),
    maxWidth: theme => ({
      none: 'none',
      auto: 'auto',
      xs: '20rem',
      xmd: '28.94rem',
      sm: theme('screens.sm'),
      md: theme('screens.md'),
      lg: theme('screens.lg'),
      xl: theme('screens.xl'),
      ...theme('spacing'),
      ...theme('spacingPercent'),
      ...theme('spacingGrid'),
    }),
    maxHeight: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      ...theme('spacingPercent'),
    }),
    padding: theme => ({
      ...theme('spacing'),
      ...theme('spacingPercent'),
    }),
    margin: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      ...theme('spacingNegative'),
      ...theme('spacingPercent'),
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    boxShadow: {
      default: '0 3px 6px rgba(0, 0, 0, 0.16)',
      inset: '0 2px 25px rgba(110, 108, 153, 0.08) inset',
      md: '0 4px 10px rgba(18, 121, 196, 0.34)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      xl: '0 2px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
      none: 'none',
      s1: '0 0 6px rgba(0,0,0,0.16)',
      s2: '0 0 70px 156px rgba(255,255,255,.9)',
      s3: '0 0 12px rgba(0,0,0,.14)',
      s4: '0 3px 4px rgba(0,0,0,.16)',
    },
    zIndex: {
      auto: 'auto',
      '-1': -1,
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '99': 99,
      '100': 100,
    },
    opacity: {
      '0': '0',
      '25': '.25',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '67': '.67',
      '70': '0.7',
      '75': '.75',
      '80': '0.80',
      '90': '.90',
      '100': '1',
    },
    fill: {
      current: 'currentColor',
    },
    fill: theme => ({
      ...theme('colors'),
    }),
    stroke: {
      current: 'currentColor',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
      '34px': '0 0 34px',
    },
    flexGrow: {
      '0': 0,
      default: 1,
    },
    flexShrink: {
      '0': 0,
      default: 1,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    inset: theme => ({
      auto: 'auto',
      ...theme('spacingNegative'),
      ...theme('spacing'),
      ...theme('spacingPercent'),
      n50p: '-50%',
    }),
    container: {
      center: true,
      padding: '25px',
    },
    translate: {
      'xhn': 'translateX(-50%)',
      'yhn': 'translateY(-50%)',
      'c': 'translate(-50%, -50%)',
      'xfn': 'translateX(-100%)',
      'yfn': 'translateY(-100%)',
      'xf': 'translateX(100%)',
      'yf': 'translateY(100%)',
      'y0': 'translateY(0)',
      'x0': 'translateX(0)',
      'x16': 'translateX(16px)',
      'x31': 'translateX(31px)',
    },
    rotate: {
      '0': '0deg',
      '45': '45deg',
      '90': '90deg',
      '180': '180deg',
      '270': '270deg',
      '360': '360deg',
      'n45': '-45deg',
      'n90': '-90deg',
      'n180': '-180deg',
      'n270': '-270deg',
    },
    textShadow: {
      normal: '0 2px 4px rgba(0, 0, 0, .16)',
    }
  },
  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive', 'hover'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    inset: ['responsive'],
    resize: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    fill: ['responsive', 'hover', 'focus'],
    stroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    fontSize: ['responsive'],
    fontStyle: ['responsive'],
    textTransform: ['responsive'],
    textDecoration: ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive'],
    letterSpacing: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    wordBreak: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive', 'hover'],
  },
  corePlugins: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition': {
              transition: 'all 0.3s ease-in',
        },
        '.table-foot': {
          display: 'table-footer-group'
        },
        '.col-count-2': {
          columnCount: 2
        },
        '.col-count-3': {
          columnCount: 3
        },
      }

      addUtilities(newUtilities, ['responsive'])
    },

    function({ addUtilities, theme, e, variants }) {
      const translateUtilities = _.map(theme('translate'), (value, key) => {
        return {
          [`.${e(`translate-${key}`)}`]: {
            transform: `${value}`
          }
        }
      })

      addUtilities(translateUtilities, ['responsive'])
    },

    function({ addUtilities, theme, e }) {
      const rotateUtilities = _.map(theme('rotate'), (value, key) => {
        return {
          [`.${e(`rotate-${key}`)}`]: {
            transform: `rotate(${value})`
          }
        }
      })

      addUtilities(rotateUtilities, ['responsive'])
    },

    function({ addUtilities, theme, e }) {
      const textshadowUtilities = _.map(theme('textShadow'), (value, key) => {
        return {
          [`.${e(`text-shadow-${key}`)}`]: {
            textShadow: `${value}`
          }
        }
      })

      addUtilities(textshadowUtilities, ['responsive'])
    }
  ],
}