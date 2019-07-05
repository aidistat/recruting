export const fetchJson = async url => {
  const response = await fetch(url);
  return await response.json();
};

export const fetchJsonPost = async url => {
  const response = await fetch(url, {
    body: {},
    method: 'POST',
    headers: {}
  });
  return await response.json();
};
