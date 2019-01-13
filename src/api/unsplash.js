import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 5597a5fdc3f4c30a5203419ec25b62248e6dac62f6b7280e5e98a1517d608f4d'
    }
});