export const fetchJson = async url => {
  const response = await fetch(url);
  return await response.json();
 };
 
 export const fetchJsonPost = async (url, body) => {
  const response = await fetch(url, {
    body: body,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return await response.json();
 };