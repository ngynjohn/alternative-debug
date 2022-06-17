import {
  isServer,
  PORT
} from '../constants/env';

const envAwareFetch = async (url: string, options?: Record<string, unknown>) => {
  const fetchUrl = isServer && url.startsWith('/') ? `http://localhost:${PORT}${url}` : url
  const response = await fetch(fetchUrl, options);
  return response.json();
};

export { envAwareFetch as fetch };
