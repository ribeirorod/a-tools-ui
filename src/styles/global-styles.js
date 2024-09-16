import { createGlobalStyle } from 'styled-components';
import './variables.css';

export const GlobalStyles = createGlobalStyle`
/* Use the imported CSS variables */
:root {
  /* The variables are now available globally */
}
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    transition: all 0.25s linear;
  }

  button {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.button.fontSize};
    font-weight: ${({ theme }) => theme.typography.button.fontWeight};
    text-transform: ${({ theme }) => theme.typography.button.textTransform};
    border-radius: ${({ theme }) => theme.components.button.borderRadius};
    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    transition: ${({ theme }) => theme.components.button.transition};

    &:hover {
      background-color: ${({ theme }) => theme.colors.dark};
    }
  }

  input {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    border-radius: ${({ theme }) => theme.components.input.borderRadius};
    border: 1px solid ${({ theme }) => theme.components.input.borderColor};
    padding: ${({ theme }) => theme.components.input.padding};
  }

  .card {
    border-radius: ${({ theme }) => theme.components.card.borderRadius};
    box-shadow: ${({ theme }) => theme.components.card.boxShadow};
    padding: ${({ theme }) => theme.components.card.padding};
  }

  .navbar {
    height: ${({ theme }) => theme.components.navbar.height};
    background-color: ${({ theme }) => theme.components.navbar.backgroundColor};
    box-shadow: ${({ theme }) => theme.components.navbar.boxShadow};
  }

  .table {
    border-color: ${({ theme }) => theme.components.table.borderColor};
    th {
      background-color: ${({ theme }) => theme.components.table.headerBackgroundColor};
    }
    tr:hover {
      background-color: ${({ theme }) => theme.components.table.rowHoverBackgroundColor};
    }
  }

  .modal {
    backdrop-color: ${({ theme }) => theme.components.modal.backdropColor};
    border-radius: ${({ theme }) => theme.components.modal.borderRadius};
    box-shadow: ${({ theme }) => theme.components.modal.boxShadow};
  }

  .toast {
    border-radius: ${({ theme }) => theme.components.toast.borderRadius};
    box-shadow: ${({ theme }) => theme.components.toast.boxShadow};
  }
`;