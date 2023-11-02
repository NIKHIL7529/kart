import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

const AppWrapper = styled.div`
  margin: 50px 150px auto 150px;
  padding: 10px 20px;
  background-color: purple;
  
  @media (max-width: 1200px) {
    margin: 0;
  }
`;

const AppTitle = styled.h1`
  font-size: 30px;
  color: white;
`;

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <AppTitle>Product List</AppTitle>
        <Filter />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route
            path="/filter/:category/sort/:sortOrder/page/:page"
            element={<ProductList />}
          />
        </Routes>
      </AppWrapper>
    </Router>
  );
};

export default App;
