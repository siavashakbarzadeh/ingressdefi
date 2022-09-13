module.exports = {
  apps : [
    {
      name      : 'Ingressdefi',
      script    : '5ncmVzc2.js',
      watch     : true,
      ignore_watch : ["logs/*","uZmln/token1.json","uZmln/addipAnshd.json"],
      output: 'logs/pm2/out.log',
      error: 'logs/pm2/error.log',
      log: 'logs/pm2/combined.outerr.log',
      env: {
        NODE_ENV: 'odrp',
        PORT: 2054
      }
    }
  ]
};