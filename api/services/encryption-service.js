const CryptoJS = require("crypto-js");

function encryptAES(message) {
    return CryptoJS.AES.encrypt(message, process.env.APP_KEY).toString();
}

function decryptAES(message, encoder = CryptoJS.enc.Utf8) {
    const decrypted = CryptoJS.AES.decrypt(message, process.env.APP_KEY);

    return decrypted.toString(encoder);
}

module.exports = {
    encryptAES,
    decryptAES,
};