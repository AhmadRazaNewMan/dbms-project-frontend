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
export const loginAdmin = async (user) => {
    console.log('called')
    console.log(user)
    try {
        const response = await axios.post(`${API_URL}/login`, {
            user
        });
        console.log(response);
        const { data } = response;
       
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