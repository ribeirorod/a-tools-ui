const baseTheme = {
  colors: {
    background: 'var(--color-background)',
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    tertiary: 'var(--color-tertiary)',
    accent: 'var(--color-accent)',
    text: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      tertiary: 'var(--color-text-tertiary)',
    },
    border: 'var(--color-border)',
    success: 'var(--color-success)',
    danger: 'var(--color-danger)',
    warning: 'var(--color-warning)',
    info: 'var(--color-info)',
    light: 'var(--color-light)',
    dark: 'var(--color-dark)',
    white: 'var(--color-white)',
    black: 'var(--color-black)',
    gray100: 'var(--color-gray-100)',
    gray200: 'var(--color-gray-200)',
    gray300: 'var(--color-gray-300)',
    gray400: 'var(--color-gray-400)',
    gray500: 'var(--color-gray-500)',
    gray600: 'var(--color-gray-600)',
    gray700: 'var(--color-gray-700)',
    gray800: 'var(--color-gray-800)',
    gray900: 'var(--color-gray-900)',
    primaryHover: 'var(--color-primary-hover)',
    secondaryHover: 'var(--color-secondary-hover)',
    successHover: 'var(--color-success-hover)',
    dangerHover: 'var(--color-danger-hover)',
    warningHover: 'var(--color-warning-hover)',
    infoHover: 'var(--color-info-hover)',
  },

  // Typography
  typography: {
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--font-size-base)',
    fontWeightLight: 'var(--font-weight-light)',
    fontWeightRegular: 'var(--font-weight-regular)',
    fontWeightMedium: 'var(--font-weight-medium)',
    fontWeightBold: 'var(--font-weight-bold)',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      fontSize: '0.875rem',
      textTransform: 'none',
      fontWeight: 700,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  // Add a new section for syntax highlighting
  syntax: {
    background: 'var(--color-syntax-background)',
    text: 'var(--color-syntax-text)',
    comment: 'var(--color-syntax-comment)',
    keyword: 'var(--color-syntax-keyword)',
    string: 'var(--color-syntax-string)',
    number: 'var(--color-syntax-number)',
    function: 'var(--color-syntax-function)',
  },

  ui: {
    sidebar: {
      background: 'var(--color-sidebar-background)',
      itemHover: 'var(--color-sidebar-item-hover)',
    },
    header: {
      background: 'var(--color-header-background)',
      text: 'var(--color-header-text)',
    },
    input: {
      background: 'var(--color-input-background)',
      text: 'var(--color-input-text)',
      placeholder: 'var(--color-input-placeholder)',
    },
    button: {
      primary: 'var(--color-button-primary)',
      primaryHover: 'var(--color-button-primary-hover)',
      secondary: 'var(--color-button-secondary)',
      secondaryHover: 'var(--color-button-secondary-hover)',
      text: 'var(--color-button-text)',
    },
  },
  // Breakpoints
  breakpoints: {
    xs: 'var(--breakpoint-xs)',
    sm: 'var(--breakpoint-sm)',
    md: 'var(--breakpoint-md)',
    lg: 'var(--breakpoint-lg)',
    xl: 'var(--breakpoint-xl)',
  },

  // Shadows
  shadows: {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)',
  },
  padding: {
    none: 0,
    sm: 'var(--padding-sm)',
    md: 'var(--padding-md)',
    lg: 'var(--padding-lg)',
  },
  margin: {
    none: 0,
    sm: 1,
    md: 1,
    lg: 2,
  },
  // Border Radius
  borderRadius: {
    none: '0',
    sm: 'var(--border-radius-sm)',
    md: 'var(--border-radius-md)',
    lg: 'var(--border-radius-lg)',
    xl: 'var(--border-radius-xl)',
    full: 'var(--border-radius-full)',
  },

  // Z-index
  zIndex: {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },

  // Components
  components: {
    button: {
      transition: 'all 0.3s ease',
      padding: '8px 12px',
      fontSize: '0.875rem',
      backgroundColor: 'var(--color-light)',
      hoverBackground: 'var(--color-gray-200)',
      color: 'var(--color-dark)',
      border: 'none',
      cursor: 'pointer',
      small: {
        padding: '8px 12px',
        fontSize: '0.875rem',
      },
      medium: {
        padding: '12px 18px',
        fontSize: '1rem',
      },
      large: {
        padding: '16px 24px',
        fontSize: '1.2rem',
      },
      primary: {
        color: 'var(--color-button-text)',
        backgroundColor: 'var(--color-button-primary)',
        hoverBackground: 'var(--color-button-primary-hover)',
      },
      secondary: {
        backgroundColor: 'var(--color-button-secondary)',
        color: 'var(--color-button-text)',
        hoverBackground: 'var(--color-button-secondary-hover)',
      },
      light: {
        backgroundColor: 'var(--color-light)',
        color: 'var(--color-dark)',
        hoverBackground: 'var(--color-gray-200)',
      },
      dark: {
        backgroundColor: 'var(--dark-color-button-background)',
        color: 'var(--color-light)',
        hoverBackground: 'var(--color-gray-800)',
      },
      black: {
        backgroundColor: 'var(--color-black)',
        color: 'var(--color-white)',
        hoverBackground: 'var(--color-gray-900)',
      },
    },

    // Container
    container: {
      backgroundColor: 'var(--color-container-background)',
      color: 'var(--color-dark)',
      boxSizing: 'border-box', // Ensures padding and border are included in the element's total width and height
      overflow: 'hidden',
    },
    // Input
    input: {
      borderRadius: '4px',
      borderColor: 'var(--color-gray-400)',
      padding: '10px',
      fontSize: '1rem',
    },

    // Card
    card: {
      boxShadow: 'var(--shadow-sm)',
      maxWidth: '100%',
      backgroundColor: 'var(--color-white)',
      color: 'var(--color-dark)',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s ease',
    },

    // Navbar
    navbar: {
      height: '64px',
      backgroundColor: 'var(--color-white)',
      boxShadow: 'var(--shadow-sm)',
    },

    // Table
    table: {
      borderColor: 'var(--color-gray-400)',
      headerBackgroundColor: 'var(--color-gray-100)',
      rowHoverBackgroundColor: 'var(--color-gray-200)',
    },

    // Modal
    modal: {
      backdropColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '8px',
      boxShadow: 'var(--shadow-md)',
    },

    // Toast/Snackbar
    toast: {
      borderRadius: '4px',
      boxShadow: 'var(--shadow-md)',
    },

    // Sidebar
    sidebar: {
      width: '250px',
      backgroundColor: 'var(--color-gray-100)',
      color: 'var(--color-dark)',
      padding: '20px',
      boxShadow: 'var(--shadow-sm)',
      item: {
        padding: '10px 15px',
        fontSize: '1rem',
        color: 'var(--color-dark)',
        hoverBackground: 'var(--color-gray-200)',
      },
    },
  },

  // Transitions
  transitions: {
    easing: {
      easeInOut: 'var(--transition-easing-ease-in-out)',
      easeOut: 'var(--transition-easing-ease-out)',
      easeIn: 'var(--transition-easing-ease-in)',
      sharp: 'var(--transition-easing-sharp)',
    },
    duration: {
      shortest: 'var(--transition-duration-shortest)',
      shorter: 'var(--transition-duration-shorter)',
      short: 'var(--transition-duration-short)',
      standard: 'var(--transition-duration-standard)',
      complex: 'var(--transition-duration-complex)',
      enteringScreen: 'var(--transition-duration-entering-screen)',
      leavingScreen: 'var(--transition-duration-leaving-screen)',
    },
  },
};

export default baseTheme;