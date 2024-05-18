import axios from 'axios';
const BASE_URL='http://localhost:8080'
// Add Notification
async function addNotification(title, message,file) {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/notification/add`, {
            title,
            message,
            file
        });
        
        console.log('Notification added successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding notification:', error.response.data);
        return { error: 'Failed to add notification',status:response.status };
    }
}

// Get Notifications
async function getNotifications() {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/notification/get`);
        console.log('Notifications:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error getting notifications:', error.response.data);
        return { error: 'Failed to get notifications' };
    }
}


//delete notification
async function deleteNotification(id) {
    try {
        const response = await axios.delete(`${BASE_URL}/api/v1/notification/delete/${id}`);
        console.log('Notification deleted successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting notification:', error.response.data);
        return { error: 'Failed to delete notification' };
    }
}
// Usage example
export {addNotification,getNotifications,deleteNotification}