import mongoose from 'mongoose';

const liveSessionSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['admin', 'student'],
    },
    uniqueId: {
        type: String, // unique session id for each classes e.g. 9983ko2
        required: true,
    },
    userUrl: {
        // complete shareable url to students e.g. https://tutorarc.com/9983ko2
        type: String,
        required: true,
    },
});

const LiveSession = mongoose.model('LiveSession', liveSessionSchema);

export default LiveSession;
