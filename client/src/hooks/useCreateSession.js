import { useState } from 'react';

const useCreateSession = () => {
    const [loading, setLoading] = useState(false);
    const [session, setSession] = useState();
    const [status, setStatus] = useState();

    async function createSession() {
        try {
            setLoading(true);
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/session/admin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!res.ok) {
                throw new Error('Something went wrong');
            }

            const data = await res.json();
            setSession(data.session);
            setStatus({ success: true, message: data.message });
        } catch (err) {
            setStatus({ success: false, message: err.message });
            console.error(err.message);
        } finally {
            setLoading(false);
            setTimeout(() => {
                setStatus(null);
            }, 3000);
        }
    }

    return { loading, createSession, session, status };
};

export { useCreateSession };
