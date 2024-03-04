const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/src/tests/jest.setup.js"],
    testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);