import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router';
import CreateSession from './pages/CreateSession.jsx';
import SessionPage from './pages/SessionPage.jsx';
import NotFound from './pages/NotFound.jsx';

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<CreateSession />} />
                <Route path="/session/:uniqueId" element={<SessionPage />} />
                <Route path="*" element={<NotFound />} />
            </>
        )
    );
    return <RouterProvider router={router} />;
};

export default App;
