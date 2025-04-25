module.exports = {
  apps: [
    {
      name: 'test-nodejs-ubuntu',
      script: 'src/index.js',
      interpreter: 'node',
      watch: false,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
