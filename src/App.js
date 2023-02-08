import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/admin/Dashboard';
import AddProducts from './components/admin/AddProducts';
import ViewProducts from './components/admin/ViewProducts';

import Home from './pages/Home/Home';
import Products from './pages/shop/Products';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        {/* Admin Section */}
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/products/add' element={<AddProducts />} />
        <Route path='/products/list' element={<ViewProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
