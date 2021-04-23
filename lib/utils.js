function getDomain(url) {
  const domain = new URL(url);
  return domain.hostname;
}

module.exports = {
  getDomain,
};
