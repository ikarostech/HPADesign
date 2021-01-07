module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  setupFiles: ['jest-canvas-mock'],
  transformIgnorePatterns: ['node_modules/(?!(vue/dist/vue.esm.js|three)/)'],
  moduleFileExtensions: [
    "js",
    "ts",
    "vue"
  ],
  //TODO jsファイルで書かれたテストはimport文が対応しておらず落ちてしまうので一時的に無効にする
  modulePathIgnorePatterns: ['src/components/01_element/DrugableCanvas/BezierCanvas.test.js'],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^[^.]+.vue$": "vue-jest"
  },
  snapshotSerializers: [
    "jest-serializer-vue"
  ],
  globals: {
    "ts-jest": {
      "tsconfig": "tsconfig.json"
    }
  },
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/$1",
  },
}