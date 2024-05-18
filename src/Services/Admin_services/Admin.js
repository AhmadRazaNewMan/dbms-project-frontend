import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/admin';


// Register Admin
export const registerAdmin = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            Username: username,
            Email: email,
            Password: password
        });
        console.log(response);
        const { data } = response;
        return data;
    } catch (error) {
        throw new Error('Failed to register admin');
    }
}

// Login Admin
export const loginAdmin = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            Username: username,
            Password: password
        });
        console.log(response);
        const { data } = response;
        // Set the admin_token cookie in the browser
        // document.cookie = `admin_token=${data.admin_token}`;
        return data;
    } catch (error) {
        throw new Error('Failed to login admin');
    }
};

// Update Admin
export const updateAdmin = async (adminID, username, email, password) => {
    try {
        const response = await axios.put(`${API_URL}/update`, {
            AdminID: adminID,
            Username: username,
            Email: email,
            Password: password
        });
        console.log(response);
        const { data } = response;
        return data;
    } catch (error) {
        throw new Error('Failed to update admin');
    }
};