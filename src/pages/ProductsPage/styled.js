import styled from 'styled-components';

export const StyledProductPage = styled.div`
  .productForm {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border: 1px solid black;
    margin-bottom: 35px;
  }
  .formLabel {
  }
  .formInput {
  }
  .productList {
    margin-top: 35px;
    display: grid;
    gap: 25px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .product {
    padding: 20px;
    border: 1px solid black;
  }
  .productTitle {
  }
  .productDeleteBtn {
  }
  .productDescription {
  }
`;
