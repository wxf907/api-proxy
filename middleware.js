export function middleware(context) {
  const { request, rewrite } = context;
  const url = new URL(request.url);
  return rewrite('https://7b1a24bf.r15.cpolar.top' + url.pathname + url.search);
}
