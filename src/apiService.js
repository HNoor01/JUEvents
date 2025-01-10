import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.129:3000/api',
    timeout: 10000,
});
export const respondToEvent = async (eventId, status, notes) => {
    try {
        const response = await api.patch('/events/respond', {
            eventId,
            status,
            notes,
        });
        return response.data;
    } catch (error) {
        console.error('Error responding to event:', error);
        throw error.response?.data || { error: 'Failed to update event status.' };
    }
};
export default api;
