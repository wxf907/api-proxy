export default async function(request, env, ctx) {
  const targetUrl = 'https://zq8p5xnqrq.coze.site';
  const url = new URL(request.url);
  url.hostname = new URL(targetUrl).hostname;
  
  const modifiedRequest = new Request(url, {
    method: request.method,
    headers: request.headers,
    body: request.body
  });
  
  return fetch(modifiedRequest);
}
