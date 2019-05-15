module.exports = {
    "transform": {
        ".(ts|tsx)": "/Users/tychotatitscheff/Code/open-source/fennel/fennel-src/node_modules/ts-jest/dist/index.js"
    },
    "transformIgnorePatterns": [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "collectCoverageFrom": [
        "src/**/*.{ts,tsx}"
    ],
    "testMatch": [
        "<rootDir>/test/**/*.(spec|test).{ts,tsx}"
    ],
    "testURL": "http://localhost",
    "rootDir": "/Users/tychotatitscheff/Code/open-source/fennel/fennel-src/packages/common",
    "watchPlugins": [
        "/Users/tychotatitscheff/Code/open-source/fennel/fennel-src/node_modules/jest-watch-typeahead/filename.js",
        "/Users/tychotatitscheff/Code/open-source/fennel/fennel-src/node_modules/jest-watch-typeahead/testname.js"
    ]
}