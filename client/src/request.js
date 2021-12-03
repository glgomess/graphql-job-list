const backendUrl = 'http://localhost:9000/graphql';

export async function fetchJobs() {
  const response = await fetch(backendUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: `{
      jobs {
        title
        description
        id
        company {
          id
          name
          description
        }
  }}`,
    }),
  });
  const responseBody = await response.json();
  return responseBody.data.jobs;
}
