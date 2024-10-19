export const fetchCsrfToken = async (): Promise<string> => {
  try {
    const response = await fetch(`${process.env.API_URL}/csrf`, {
      method: 'GET',
      credentials: 'include',
    });
    const data = await response.json();
    return data.csrfToken || '';
  } catch (error) {
    console.error('Error fetching CSRF token:', error);
    return '';
  }
};
