const prod = {
    url: {
        API_URL: '/birdie_backend'
    }
};

const dev = {
    url: {
        API_URL: ''
    }
};

export const config = process.env.NODE_ENV === 'production' ? prod : dev;