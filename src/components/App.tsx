import Sidebar from './Sidebar';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Products from './Products';
import '../index.css';
import Cart from './Cart';
const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/category/:categoryId" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
