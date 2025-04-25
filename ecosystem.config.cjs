module.exports = {
  apps: [{
    name: 'my-app',
    script: 'src/index.js',  // Đảm bảo đường dẫn đến file chính của ứng dụng
    instances: 'max',         // Tùy chỉnh số lượng instances của ứng dụng
    exec_mode: 'cluster',     // Chạy dưới dạng cluster mode
    env: {
      NODE_ENV: 'production'
    }
  }]
};
