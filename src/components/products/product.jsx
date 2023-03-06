import { Link } from "react-router-dom";
import styled from "styled-components";

export const Product = ({ product }) => {
  return (
    <Wrap>
      <Link to="#">
        <div className="product__image">
          <img src={product.image} alt="product" />
        </div>
      </Link>
      <div className="products__store">
        <span>{product.provider}</span>
      </div>

      <div className="product__name">
        <span>{product.name}</span>
      </div>

      <div className="product__price">
        <span className="product__price--number">{product.price}</span>
        <span className="product__price--unit">원</span>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  .product__image {
    width: 380px;
    height: 380px;
    border-radius: 10px;
    margin-bottom: 16px;
  }

  .product__image img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
  }

  .products__store {
    margin-bottom: 10px;
  }

  .products__store span {
    font-size: 16px;
    line-height: 22px;
    color: #767676;
  }

  .product__name {
    margin-bottom: 10px;
  }

  .product__name span {
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }

  .product__price--number {
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
    color: #000000;
  }

  .product__price--unit {
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }

  @media (max-width: 968px) {
    .product__image {
      width: 220px;
      height: 220px;
    }
    .product__name span {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    .product__image {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 360px) {
    .product__image {
      width: 200px;
      height: 200px;
    }

    .products__store {
      font-size: 12px;
      line-height: 22px;
      color: #767676;
    }

    .product__name {
      font-size: 12px;
    }
  }
`;
