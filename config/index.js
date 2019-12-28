"use strict";

const { resolve } = require("path");
const { config: dotEnvConfig } = require("dotenv");
const defaultEnv = require("./env.default.json");
const processEnv = process.env;

const dotEnvFileName = processEnv.NODE_ENV
    ? `.env.${processEnv.NODE_ENV}`
    : ".env";

dotEnvConfig({ path: resolve(__dirname, dotEnvFileName) });

const config = {};
Object.keys(defaultEnv).forEach(key => {
    config[key] = processEnv[key] || defaultEnv[key];
});

module.exports = config;
