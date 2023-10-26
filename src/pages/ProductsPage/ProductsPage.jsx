import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  deleteProduct,
  fetchProducts,
  setFilterTerm,
} from 'redux/productReducer';
import {
  selectProducts,
  selectProductsError,
  selectProductsFilterTerm,
  selectProductsIsLoading,
} from 'redux/products.selectors';

import { StyledProductPage } from './styled';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts); // [1,2] === [1,2]
  const isLoading = useSelector(selectProductsIsLoading);
  const error = useSelector(selectProductsError);
  const filterTerm = useSelector(selectProductsFilterTerm);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = event => {
    event.preventDefault();

    const title = event.currentTarget.elements.productTitle.value;
    const description = event.currentTarget.elements.productDescription.value;
    const price = event.currentTarget.elements.productPrice.value;

    const newProduct = {
      title,
      description,
      price,
    };

    dispatch(addProduct(newProduct));
    event.currentTarget.reset();
  };

  const handleDeleteProduct = productId => {
    dispatch(deleteProduct(productId));
  };

  const handleFilterTerm = ({ target: { value } }) => {
    dispatch(setFilterTerm(value));
  };

  const filteredProducts =
    products !== null &&
    products.filter(product =>
      product.title.toLowerCase().includes(filterTerm.toLowerCase().trim())
    );

  // filterTerm = 'co' -> 'co'
  // 'Taco Pizza' -> 'taco pizza'
  return (
    <StyledProductPage>
      <h2>Products Page</h2>
      <form onSubmit={handleAddProduct} className="productForm">
        <label className="formLabel">
          <span>Title:</span>
          <input
            className="formInput"
            type="text"
            name="productTitle"
            required
          />
        </label>
        <label>
          <span>Description:</span>
          <input
            className="formInput"
            type="text"
            name="productDescription"
            required
          />
        </label>
        <label>
          <span>Price:</span>
          <input
            className="formInput"
            type="text"
            name="productPrice"
            required
          />
        </label>
        <button type="submit">Add product</button>
      </form>

      <div>
        <h3>Find product by title:</h3>
        <input
          onChange={handleFilterTerm}
          value={filterTerm}
          type="text"
          placeholder="Taco..."
        />
      </div>

      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      <div className="productList">
        {filteredProducts &&
          filteredProducts.map(({ id, title, description, price }) => {
            return (
              <div key={id} className="product">
                <h3 className="productTitle">Title: {title}</h3>
                <p className="productDescription">Description: {description}</p>
                <p>Price: {price}</p>
                <button
                  onClick={() => handleDeleteProduct(id)}
                  className="productDeleteBtn"
                >
                  😭❌
                </button>
              </div>
            );
          })}
      </div>
    </StyledProductPage>
  );
};

export default ProductsPage;
