module.exports = {
    displayName: "Redux",
    collectCoverageFrom: [
        "**/src/**/*.js"
    ],
    coverageThreshold: {
        global: {
            statements: 50,
            branches: 13,
            functions: 19,
            lines: 18
        }
    },
    coveragePathIgnorePatterns: [
        "/src/index.js",
        "/src/setupTests.js",
        "/src/reportWebVitals.js",
    ]

}