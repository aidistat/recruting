const fetchJson = async url => {
  const response = await fetch(url);
  return await response.json();
};

const fetchJson = async url => {
  const response = await fetch(url, {
    body: {},
    method: 'POST',
    headers: {}
  });
  return await response.json();
};
