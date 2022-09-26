const express = require('express');
const auth = require('./auth');

module.exports = function(server) {
    const protectedApi = express.Router();
    server.use('/api', protectedApi);

    protectedApi.use(auth);

    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(protectedApi, '/billingCycles');

    const opneApi = express.Router();
    server.use('/oapi', opneApi);

    const AuthService = require('../api/user/authService');
    opneApi.post('/login', AuthService.login);


}