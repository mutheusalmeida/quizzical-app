// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

type Config = {
  method: 'POST' | 'GET',
}

export async function client<T> (endpoint: string, { body, ...customConfig }: { body?: unknown } & Config) {
  const config: { body?: string } & Config = {
    ...customConfig,
    method: body ? 'POST' : 'GET',
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data

  try {
    const response = await window.fetch(endpoint, config)
    data = await response.json() as T
    if (response.ok) {
      // Return a result object similar to Axios
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      }
    }
    throw new Error(response.statusText)
  } catch (err: unknown) {
    if (err instanceof Error) {
      return Promise.reject(err.message ? err.message : data)
    }
  }
}

client.get = <T>(endpoint: string, customConfig?: { body: unknown } & Config) => {
  return client<T>(endpoint, { ...customConfig, method: 'GET' })
}
