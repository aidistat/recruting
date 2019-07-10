export const fetchJson = async url => {
  const response = await fetch(url);
  return await response.json();
};

export const fetchJsonPost = async (url, body) => {
  try {
    const response = await fetch(url, {
      body: body,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response;
  } catch (error) {return error;
  }
};

export const fetchJsonPUT = async (url, body) => {
  try {
    const response = await fetch(url, {
      body: body,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response;
  } catch (error) {return error;
  }
};

export const fetchDelete = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    return await response;
  } catch (error) {return error;
  }
};
