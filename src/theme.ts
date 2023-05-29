import { Theme } from '@milibrary/mi-style';

export const defaultTheme: Theme = {
  unit: 4,
  media: {
    desktop: '@media (min-width: 1200px)',
    tablet: '@media (min-width: 750px) and (max-width: 1199px)',
    mobile: '@media (max-width: 749px)',
  },
  color: {
    primary: '#FCDDEC',
    onPrimary: '#03045E',
    secondary: '#E07F8C',
    onSecondary: '#fff',
    surface: '#fff',
    onSurface: '#03045E',
    accent: '#de4b74',
    onAccent: '#fff',
    input: '#ebebeb',
    onInput: '#191919'
  },
  createSet: ({ unit = 0, color = {} }: Theme) => ({
    Button: {
      default: `
        font-family: "Poppins", sans-serif;
        font-size: 20px;
        padding: .7rem 1rem;
        border-radius: 6px;
        transition: .5s all;
        cursor: pointer;
        &::before {

        }
        &:hover::before {

        }
      `,
      primary: `
      background: ${color.onPrimary};
      color: ${color.primary};
      border: 2px solid ${color.onPrimary};
      &:hover {
        background: transparent;
        color: ${color.onPrimary};
        border: 2px solid ${color.onPrimary};
      }
      `,
      secondary: `
      color: ${color.onPrimary};
      border: 2px solid ${color.onPrimary};
      &:hover {
        background: ${color.onPrimary};
        color: ${color.primary};
      }
      `,
      accent: `
      background: ${color.accent};
      color: ${color.onAccent};
      border: 2px solid ${color.accent};
      &:hover {
        background: transparent;
        color: ${color.accent};
        border: 2px solid ${color.accent};
      }
      `,
      large: `
        font-size: 24px;
      `
    },
    Font: {
      default: `
      //font-family: "Poppins", sans-serif;
      `,
      sectionTitle: `
        font-weight: 800;
        font-size: 36px;
      `,
      sectionSubTitle: `
      font-weight: 600;
      font-size: 24px;
      letter-spacing: 0.15em;
      color: ${color.onSecondary};
      `,
      link: `
        font-size: 1.5rem;
        cursor: pointer;
        color: ${color.accent};
        &:hover {
          color: ${color.onPrimary};
        }
      `,
      h1: `
      font-weight: 800;
      font-size: 5rem;
      line-height: 1.3;
      `,
      h2: `
      font-size: 4.5rem;
      font-weight: 600;
      `,
      h3: `
      font-size: 4rem;
      `,
      h4: `
      font-size: 3rem;
      `,
      h5: `
      font-size: 2.5rem;
      `,
      p1: `
      font-weight: 600;
      font-size: 2rem;
      line-height: 1.5;
      `,
      p2: `
        font-weight: 600;
        font-size: 1.3rem;
        line-height: 1.8;
      `,
      p3: `
      font-weight: 400;
font-size: 1rem;
line-height: 1.5;
      `,
      p4: `
      font-size: .8rem;
      `,
      p5: `
      font-size: .7rem;
      `
    },
    Div: {
      default: `
      color: ${color.onPrimary};
      `,
      card: `
      background: ${color.surface};
      color: ${color.onSurface};
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.06);
      border-radius: 10px;
      overflow:hidden;
      `,
      cardLined: `
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.06);
      border-radius: 10px;
      overflow:hidden;
      border: 2px solid ${color.onPrimary}
      `,
      level1: `box-shadow: 20px 20px 40px rgba(0,0,1,10%);`,
      level2: `box-shadow: 20px 20px 40px rgba(0,0,1,20%);`,
      level3: `box-shadow: 20px 20px 40px rgba(0,0,1,30%);`
    },
    Span: {
      chips: `
      background: ${color.accent};
      padding: 3px 8px;
      border-radius: 14px;
      font-size: 11px;
      color: #fff;
      `,
      tooltip: `
      position:relative;
      padding: 2px 8px;
      border-radius: 2px;
      color: #fff;
      font-size: 14px;
      background: ${color.accent};
      `,
      tooltipBottom: `
        &::after {
          content: " ";
          position: absolute;
          top: 100%; /* At the bottom of the tooltip */
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: ${color.accent} transparent transparent transparent;
        }
      `,
      tooltipLeft: `
        &::after {
          content: " ";
          position: absolute;
          top: 50%;
          right: 100%; /* To the left of the tooltip */
          margin-top: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: transparent ${color.accent} transparent transparent;
        }
      `
    },
    Input: {
      default: `
      background: ${color.input};
      border-radius: 4px;
      padding: .7rem 1rem;
      font-size: 1.2rem;
      color: ${color.onInput};
      `,
      full: `
        display: block;
        width: 100%;
      `
    },
    Textarea: {
      default: `
      background: ${color.input};
      border: none;
      border-radius: 4px;
      padding: .7rem 1rem;
      font-size: 1.2rem;
      color: ${color.onInput};
      resize: none;
      `,
      full: `
        display: block;
        width: 100%;
      `
    }
  }),
  set: {
  }
}

export const themes: { [key: string]: Theme } = {
  default: {
    color: {
      primary: '#FCDDEC',
      onPrimary: '#03045E',
      secondary: '#E07F8C',
      onSecondary: '#fff',
      surface: '#fff',
      onSurface: '#E07F8C',
      accent: '#d42757',
      onAccent: '#fff',
      input: '#ebebeb',
      onInput: '#191919'
    },
  },
  dark: {
    color: {
      primary: '#222222',
      onPrimary: '#38ffff',
      secondary: '#3f3e3e',
      onSecondary: '#38ffff',
      surface: '#424242',
      onSurface: '#f7f7f7',
      accent: '#d42757',
      onAccent: '#fff',
      input: '#2a2a2a',
      onInput: '#fff'
    },
  },
  darkBlue: {
    color: {
      primary: '#3b4fb6',
      onPrimary: '#feff19',
      secondary: '#e2956e',
      onSecondary: '#fff',
      surface: '#403e3d',
      onSurface: '#fff',
      accent: '#ff792b',
      onAccent: '#fff',
      input: '#2a2a2a',
      onInput: '#fff'
    },
  },
  purple: {
    color: {
      primary: '#e3cdff',
      onPrimary: '#5c42ff',
      secondary: '#713fb1',
      onSecondary: '#fff',
      surface: '#fff',
      onSurface: '#4d4d4d',
      accent: '#ac46cc',
      onAccent: '#fff',
      input: '#ebebeb',
      onInput: '#191919'
    }
  },
  blue: {
    color: {
      primary: '#2a94ff',
      onPrimary: '#ffffff',
      secondary: '#f47575',
      onSecondary: '#fff',
      surface: '#fff',
      onSurface: '#191919',
      accent: '#ff4b4b',
      onAccent: '#fff',
      input: '#ebebeb',
      onInput: '#191919'
    }
  },
  green: {
    color: {
      primary: '#c7ffcd',
      onPrimary: '#006bff',
      secondary: '#ff947c',
      onSecondary: '#fff',
      surface: '#fff',
      onSurface: '#191919',
      accent: '#ff6363',
      onAccent: '#fff',
      input: '#ebebeb',
      onInput: '#191919'
    }
  }
}
