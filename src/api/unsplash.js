import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c9a032ce46ceeb37c5e2599e3532db9d285fba37f63daf48467b8194c09fc209'
    }
})