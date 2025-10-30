import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const sessionPage = () => {
    const { uniqueId } = useParams();
    const [session, setSession] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/api/session/${uniqueId}`)
            .then((res) => res.json())
            .then((data) => setSession(data.session))
            .catch((err) => {
                setError(true);
            });
    }, []);

    return (
        <>
            {session ? (
                <div className="min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-gray-50 p-6">
                    <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-2xl">
                        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                            🎬 Live Session Player
                        </h1>

                        <video
                            className="w-full rounded-xl border border-gray-200 shadow-sm"
                            controls
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                        >
                            Your browser does not support the video tag.
                        </video>

                        <div className="text-center mt-4 text-sm text-gray-500">
                            Session ID:{' '}
                            <span className="font-mono">abc123</span>
                        </div>
                        <div className="text-center mt-4 text-sm text-gray-500">
                            User URL:{' '}
                            <span className="font-mono">
                                {session?.userUrl}
                            </span>
                        </div>
                    </div>
                </div>
            ) : error ? (
                <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
                    <h1 className="text-5xl font-bold text-red-600">500</h1>
                    <p className="text-xl mt-2">Something went wrong!</p>
                </div>
            ) : (
                <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
                    <h1 className="text-5xl font-bold text-red-600">404</h1>
                    <p className="text-xl mt-2">Session Not Found</p>
                </div>
            )}
        </>
    );
};

export default sessionPage;
