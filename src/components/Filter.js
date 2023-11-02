import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    height: 80px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  color: teal;
`;

const Select = styled.select`
  margin-left: 5px;
  color: purple;
  border: 1px solid gold;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  color: purple;
  background-color: white;
  border: 1px solid gold;
  border-radius: 5px;
  font-size: 15px;

  &:hover {
    color: green;
    border: 1px solid gold;
    border-radius: 10px;
    cursor: pointer;
  }

  &:active {
    color: gold;
    background-color: purple;
    border: 2px solid gold;
  }
`;

const Filter = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleFilterSort = () => {
    navigate(`/filter/${selectedCategory}/sort/${sortOrder}/page/1`);
  };

  const categories = Array.from(
    new Set(data.map((product) => product.category))
  );

  return (
    <FilterWrapper>
      <div>
        <Label>Filter by Category: </Label>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          {categories.map((ctgry) => (
            <option key={ctgry} value={ctgry}>
              {ctgry}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <Label>Sort by Price: </Label>
        <Select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
      </div>
      <Button onClick={handleFilterSort}>Apply Filters & Sort</Button>
    </FilterWrapper>
  );
};

export default Filter;
