import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";
import Pagination from "./Pagination";
import image from "../images/user.jpg";

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 20px;
  color: teal;

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @media (min-width: 576px) and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

const ProductWrapper = styled.div`
  background-color: white;
  border: 1px solid #e1e1e1;
  box-shadow: 3px 3px 4px gold;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Price = styled.p`
  color: green;
`;

const ProductList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const initialCategory = "All";
    const initialSortOrder = "asc";
    const initialPage = "1";

    navigate(
      `/filter/${initialCategory}/sort/${initialSortOrder}/page/${initialPage}`
    );
    // eslint-disable-next-line
  }, []);
  const { category, sortOrder, page } = useParams();

  // Filtering logic
  const filtereddata =
    category === "All"
      ? data
      : data.filter((product) => product.category === category);

  // Sorting logic
  const sorteddata = [...filtereddata].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  // Pagination logic
  const dataPerPage = 10;
  const startIndex = page === undefined ? 0 : (page - 1) * dataPerPage;
  const paginateddata = sorteddata.slice(startIndex, startIndex + dataPerPage);

  return (
    <>
      <ProductListWrapper>
        {paginateddata.map((product) => (
          <ProductWrapper key={product.id}>
            <Image src={image} alt="image" />
            <p>Name: {product.title}</p>
            <p>Description: {product.description}</p>
            <Price>Price: ${product.price}</Price>
          </ProductWrapper>
        ))}
      </ProductListWrapper>
      <Pagination totalProducts={sorteddata.length} />
    </>
  );
};

export default ProductList;
