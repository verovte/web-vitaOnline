const mongoos = require('mongoose');

const url='mongodb://localhost:27017/vitaOnLine';
const connect=mongoos.connect(url);
exports.connect;