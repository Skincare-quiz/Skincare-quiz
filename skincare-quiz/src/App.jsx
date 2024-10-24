import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import QuestionOne from './pages/questions/QuestionOne';
import QuestionTwo from './pages/questions/QuestionTwo';
import QuestionThree from './pages/questions/QuestionThree';
import QuestionFour from './pages/questions/QuestionFour';
import QuestionFive from './pages/questions/QuestionFive';
import ResultsPage from './pages/results/ResultsPage';
import { useEffect, useState } from 'react';
import ProductContext from './context/ProductContext';

function App() {
  const [products, setProducts] = useState();
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch(
        'https://jeval.com.au/collections/hair-care/products.json?page=1'
      );
      const parsed = await result.json();
      console.log(parsed);

      const collections = new Map();

      /**Making collections based on product type */
      parsed.products.forEach((product) => {
        if (!collections.has(product.product_type)) {
          collections.set(product.product_type, [product]);
        } else {
          collections.get(product.product_type).push(product);
        }
      });
      setProducts(collections);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ allProducts: products, filterProducts, setFilterProducts }}
    >
      <Routes>
        <Route
          path='/home'
          Component={HomePage}
        />
        <Route
          path='/'
          Component={HomePage}
        />
        <Route
          path='/question-one'
          Component={QuestionOne}
        />
        <Route
          path='/question-two'
          Component={QuestionTwo}
        />
        <Route
          path='/question-three'
          Component={QuestionThree}
        />
        <Route
          path='/question-four'
          Component={QuestionFour}
        />
        <Route
          path='/question-five'
          Component={QuestionFive}
        />
        <Route
          path='/results'
          Component={ResultsPage}
        />
      </Routes>
    </ProductContext.Provider>
  );
}

export default App;
