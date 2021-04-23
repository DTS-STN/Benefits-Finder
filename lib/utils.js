function getDomain(url) {
  const domain = new URL(url);
  console.log(domain.hostname);
  return domain.hostname;
}

module.exports = {
  getDomain,
};
