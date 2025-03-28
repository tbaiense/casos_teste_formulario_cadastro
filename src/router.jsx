import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'cadastro',
                element: <Cadastro />
            },
            {
                path: 'home',
                element: <Home />
            }
        ]
    }
]);

export default router;