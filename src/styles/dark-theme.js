import baseTheme from './base-theme';

const darkTheme = {
  ...baseTheme,
  colors: {
    background: 'var(--dark-color-background)',
    text: {
      primary: 'var(--dark-color-text)',
      secondary: 'var(--dark-color-text-secondary)',
      tertiary: 'var(--dark-color-text-tertiary)',
    },
    border: 'var(--dark-color-border)',
    primary: 'var(--dark-color-primary)',
    secondary: 'var(--dark-color-secondary)',
    tertiary: 'var(--dark-color-tertiary)',
    primaryHover: 'var(--dark-color-primary-hover)',
    secondaryHover: 'var(--dark-color-secondary-hover)',
    success: 'var(--dark-color-success)',
    successHover: 'var(--dark-color-success-hover)',
    danger: 'var(--dark-color-danger)',
    dangerHover: 'var(--dark-color-danger-hover)',
    warning: 'var(--dark-color-warning)',
    warningHover: 'var(--dark-color-warning-hover)',
    info: 'var(--dark-color-info)',
    infoHover: 'var(--dark-color-info-hover)',
    light: 'var(--dark-color-light)',
    lightHover: 'var(--dark-color-light-hover)',
    dark: 'var(--dark-color-dark)',
    darkHover: 'var(--dark-color-dark-hover)',
    white: 'var(--dark-color-white)',
    whiteHover: 'var(--dark-color-white-hover)',
    black: 'var(--dark-color-black)',
    blackHover: 'var(--dark-color-black-hover)',
  },
  ui: {
    ...baseTheme.ui,
    sidebar: {
      ...baseTheme.ui.sidebar,
      background: 'var(--dark-color-sidebar-background)',
      itemHover: 'var(--dark-color-sidebar-item-hover)',
    },
    header: {
      ...baseTheme.ui.header,
      background: 'var(--dark-color-header-background)',
      text: 'var(--dark-color-header-text)',
    },
    input: {
      ...baseTheme.ui.input,
      background: 'var(--dark-color-input-background)',
      text: 'var(--dark-color-input-text)',
      placeholder: 'var(--dark-color-input-placeholder)',
    },
    button: {
      ...baseTheme.ui.button,
      primary: 'var(--dark-color-button-primary)',
      primaryHover: 'var(--dark-color-button-primary-hover)',
      text: 'var(--dark-color-button-text)',
    },
  },
  components: {
    ...baseTheme.components,

    container: {
      ...baseTheme.components.container,
      backgroundColor: 'var(--dark-color-container-background)',
      color: 'var(--dark-color-text)',
    },
    card: {
      ...baseTheme.components.card,
      backgroundColor: 'var(--dark-color-card-background)',
      color: 'var(--dark-color-text)',
      border: 'var(--dark-color-card-border)',
      boxShadow: 'var(--dark-shadow-card)',
      '&:hover': {
        borderColor: 'var(--dark-color-card-hover-border)',
      },
    },
    input: {
      ...baseTheme.components.input,
      borderColor: 'var(--dark-color-border)',
      backgroundColor: 'var(--dark-color-input-background)',
    },
    navbar: {
      ...baseTheme.components.navbar,
      backgroundColor: 'var(--dark-color-navbar-background)',
    },
    table: {
      ...baseTheme.components.table,
      headerBackgroundColor: 'var(--dark-color-table-header-background)',
      rowHoverBackgroundColor: 'var(--dark-color-table-row-hover-background)',
    },
    sidebar: {
      ...baseTheme.components.sidebar,
      backgroundColor: 'var(--dark-color-sidebar-background)',
      color: 'var(--dark-color-text)',
      item: {
        ...baseTheme.components.sidebar.item,
        color: 'var(--dark-color-text)',
        '&:hover': {
          backgroundColor: 'var(--dark-color-sidebar-item-hover-background)',
        },
      },
    },
  },
};

export default darkTheme;