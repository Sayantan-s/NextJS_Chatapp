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
      '2.5': '2.5 2.5 0%',
      '3' : '3 3 0%',
      '4': '4 4 0%',
      '5': '5 5 0%',
    },
    borderRadius: {
      'none': '0',
       'sm': '0.125rem',
       default: '0.25rem',
       default: '4px',
       'md': '0.375rem',
       'lg': '0.5rem',
       '3x' : '1.5rem',
       'full': '9999px',
      'large': '12px',
    },
    pseudo: {
    'before': 'before',
    'after': 'after',
    'not-first': 'not(:first-child)',
    },
    extend: {
      gridTemplateColumns:{
        'chatHeadCol' : "minmax(40px,max-content) minmax(max-content,1fr) max-cotent",
      },
      gridTemplateRows: {
        'chatHeadRow': 'max-content 1fr',
      },
      spacing:{
        '72' : '18rem',
        '84' : '21rem',
        '96' : '24rem'
      },
      colors : {
        secondary : '#A800DC',
        primary1 : '#b38cfb',
        primary2 : '#657ece',
        noti1: "#F14F6E",
        noti2: "#CA3F52"
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
        btnItem : "0px 10px 30px rgba(169, 0, 220, 0.25)",
        chatItem : "0px 5px 15px rgba(125, 160, 255,0.1)"
      }
    },
  },
  variants: {},
  plugins: [],
}
