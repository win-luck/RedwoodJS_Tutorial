// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build

const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/web',
  transformIgnorePatterns: [
    'node_modules/(?!(@simplewebauthn/browser|@redwoodjs/auth-dbauth-web)/)'
  ],
}

module.exports = config
