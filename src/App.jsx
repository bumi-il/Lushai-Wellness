import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import BookOnline from './pages/BookOnline';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ContextProvider, { useLushaiContext } from './context/ContextProvider';

const App = () => {
    return (
        <BrowserRouter>
            <ContextProvider>
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
            </ContextProvider>
        </BrowserRouter>
    );
};

export default App;
