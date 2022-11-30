module.exports = function override(config, env) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    "timers": require.resolve("timers-browserify")
  })
  config.resolve.fallback = fallback;
  return config;
}
