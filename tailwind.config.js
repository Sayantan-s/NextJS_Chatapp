module.exports = {
  future: {
  },
  purge: [],
  theme: {
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      '2': '2 2 0%',
      '3' : '3 3 auto'
    },
    pseudo: {
    'before': 'before',
    'after': 'after',
    'not-first': 'not(:first-child)',
    },
    extend: {
      spacing:{
        '72' : '18rem',
        '84' : '21rem',
        '96' : '24rem'
      },
      colors : {
        secondary : '#A800DC',
        primary1 : '#b38cfb',
        primary2 : '#657ece'
      },
      fontFamily : {
        main : ['Poppins']
      },
      fontWeight : {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      },
      boxShadow : {
        authItem : "0px 7px 15px rgba(183, 148, 244, 0.15)",
        btnItem : "0px 10px 30px rgba(169, 0, 220, 0.25)"
      }
    },
  },
  variants: {},
  plugins: [],
}
