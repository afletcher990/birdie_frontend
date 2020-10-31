const prod = {
    url: {
        API_URL: '/birdie'
    }
};

const dev = {
    url: {
        API_URL: 'http://localhost:8000'
    }
};

export const config = process.env.NODE_ENV === 'production' ? prod : dev;