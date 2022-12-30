const client = require('../../index');
const colors = require('colors');

module.exports = {
    name: "ready"
};

client.once('ready', async () => {
    console.log("----------------------------------------".white);
    console.log(`[READY] ${client.user.tag} is up and ready to go.`.bold)
    console.log("----------------------------------------".white);
})

/**
 * ======================================================
 * Developed by FlameQuard | https://flamequard.tech
 * ======================================================
 * Mention FlameQuard when you use this codes
 * ======================================================
 * Give an awesome start to this repositories
 * ======================================================
 */