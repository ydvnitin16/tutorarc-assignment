import { useCreateSession } from '../hooks/useCreateSession.js';

const createSession = () => {
    const { loading, createSession, session, status } = useCreateSession();

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-8 overflow-hidden">
            {/* Session Card */}
            <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-3xl p-8 w-full max-w-md border border-gray-100">
                <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900">
                    Create Live Session
                </h1>

                <button
                    onClick={() => {
                        createSession();
                    }}
                    disabled={loading}
                    className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition duration-200 disabled:opacity-70"
                >
                    {loading ? (
                        <span className="flex items-center justify-center gap-2">
                            Creating...
                        </span>
                    ) : (
                        'Start Session'
                    )}
                </button>

                {/* Session Link */}
                <div className="mt-8 text-center border-t border-gray-100 pt-6">
                    <p className="text-gray-600 mb-2 font-medium">
                        Share this link:
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg border text-sm text-gray-800 font-mono ">
                        {session?.userUrl ||
                            'Link will appear here after creation'}
                    </div>
                    {status && status?.success ? (
                        <p className="text-green-600 mt-2 font-medium">{status?.message}</p>
                    ) : status && !status.success ? <p className="text-red-600 mt-2 font-medium">{status?.message}</p> : ''}
                </div>
            </div>

            {/* Live Player Card */}
            <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-3xl p-8 w-full max-w-md border border-gray-100">
                <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900">
                    Live Session Player
                </h1>

                {session ? (
                    <video
                        className="w-full rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-200"
                        controls
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                    >
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
                        <p className="font-medium">
                            Nothing is playing right now
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                            Start a session to see the live video here
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default createSession;
