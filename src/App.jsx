import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import BookOnline from './pages/BookOnline';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Navbar />
                <div className='content'>
                    <Routes>
                        <Route
                            path='/'
                            element={<Home />}
                        />
                        <Route
                            path='/contact'
                            element={<Contact />}
                        />
                        <Route
                            path='/packages'
                            element={<Packages />}
                        />
                        <Route
                            path='/bookonline'
                            element={<BookOnline />}
                        />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
