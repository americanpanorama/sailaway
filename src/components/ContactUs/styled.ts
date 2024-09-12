import styled from 'styled-components';
import {
  colorBorder,
  colorInteractive,
  colorInteractiveHover,
  colorInteractiveLight,
  colorTextInvert,
  openLeading,
} from '../../constants';

// Main container for the Contact Us form
export const ContactUsFormContainer = styled.div`
  line-height: ${openLeading};
  max-width: min(95%, 600px);
  margin: 0 auto 2rem auto;

  form {
    display: grid;
    grid-template-columns: 100%;
    row-gap: 20px;
    column-gap: 20px;

    label {
      margin-bottom: -10px;
    }

    textarea {
      height: 200px;
    }

    input,
    textarea {
      padding: 0.5rem;
      background-color: rgba(255, 255, 255, 0.6);
      border: 1px solid ${colorBorder};
      outline: none;

      &:focus {
        background-color: rgba(255, 255, 255, 1);
        border-color: transparent;
        box-shadow: 0 0 8px 2px ${colorInteractiveLight};
      }
    }

    input[type='submit'] {
      padding: 0.75rem;
      color: ${colorTextInvert};
      font-weight: 600;
      background-color: ${colorInteractive};
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: ${colorInteractiveHover};
      }
    }
  }

  @media only screen and (min-width: 600px) {
    form {
      grid-template-columns: 100px auto;

      label {
        text-align: right;
      }

      input[type='submit'] {
        grid-column: 2 / span 1;
      }
    }
  }
`;
