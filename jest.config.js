module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  transformIgnorePatterns: ['node_modules/(?!(bootstrap-vue|three)/)'],
  moduleFileExtensions: [
    "js",
    "ts",
    "vue"
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  snapshotSerializers: [
    "jest-serializer-vue"
  ],
  globals: {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  },
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/$1",
  },
}