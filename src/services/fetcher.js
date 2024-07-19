const fetcher = (endpoint, args) => {
  const url = new URL(
    endpoint,
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3003'
  );

  return fetch(url, args).then((res) => res.json());
};

export default fetcher;
