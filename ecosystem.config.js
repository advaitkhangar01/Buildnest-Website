module.exports = {
  apps: [
    {
      name: "buildnest-website",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: "max",
      exec_mode: "cluster",
      watch: false,
      max_memory_restart: "1G",
      env: {
        PORT: 3001,
        NODE_ENV: "production"
      }
    }
  ]
};
