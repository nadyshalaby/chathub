module.exports = {
  apps: [
    {
      name: "server",
      script: "./src/server.js",
      autorestart: true,
      watch: ["src"],
      ignore_watch: ["node_modules"],
      watch_options: {
        followSymlinks: false
      },
      interpreter: "babel-node"
    }
  ]
};
