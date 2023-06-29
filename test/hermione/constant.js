const PROTOCOL = 'http';
const DOMAIN = 'localhost';
const PORT = 3000;
const PATHNAME = '/hw/store';
const SUT_URI = `${PROTOCOL}://${DOMAIN}:${PORT}${PATHNAME}`;
const TIMEOUT = 5000;

module.exports = {
    SUT_URI,
    TIMEOUT,
};
