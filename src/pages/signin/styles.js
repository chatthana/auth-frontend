import styled from 'styled-components';

export default styled.div`

  height: 100%;

  article {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .login-box {
    width: 320px;
    margin-top: 42px;
  }

  .card {
    border-radius: 0;
    .title-section {
      border-bottom: 1px solid #000;
      .card-title {
        font-weight: 300;
      }
    }
    .form-section {
      padding: 24px 0;
      .form-group {
        > .form-control {
          border: 0;
          border-radius: 0;
          border-bottom: 1px solid #dadada;
          &:focus {
            box-shadow: none;
            border-color: #000;
          }
        }
      }
      .button-wrapper {
        margin-top: 24px;
      }
    }
    .footer-section {
      > .powered-by {
        margin: 0;
        font-size: 0.75em;
      }
    }
  }
`;