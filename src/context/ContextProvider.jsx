import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const LushaiContext = createContext();

export const useLushaiContext = () => useContext(LushaiContext);

const ContextProvider = ({ children }) => {
    const [path, setPath] = useState();

    const location = useLocation();

    useEffect(() => {
        setPath(location.pathname);
    }, [location]);

    const value = {
        path,
        setPath,
    }

    return (
        <LushaiContext.Provider value={value}>
            {children}
        </LushaiContext.Provider>
    );
};

export default ContextProvider;
