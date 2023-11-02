import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  color: green;
  border-radius: 100%;
  border: 1px solid gold;
  font-size: 18px;
  margin: 0 8px;

  &:hover {
    cursor: pointer;
    font-size: 20px;
  }
`;

const CurrentPageIndicator = styled.span`
  color: teal;
  font-weight: bold;
`;

const Pagination = ({ totalProducts }) => {
  const { category, sortOrder, page } = useParams();
  const navigate = useNavigate();
  const productsPerPage = 10;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const onPageChange = (number) => {
    navigate(`/filter/${category}/sort/${sortOrder}/page/${number}`);
  };

  return (
    <PaginationWrapper>
      {pageNumbers.map((number) => (
        <Button key={number} onClick={() => onPageChange(number)}>
          {number === +page ? (
            <CurrentPageIndicator>{number}</CurrentPageIndicator>
          ) : (
            number
          )}
        </Button>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
