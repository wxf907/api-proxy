export function middleware(context) {
  const { request, rewrite } = context;
  const url = new URL(request.url);
  return rewrite('https://75012b38-7e1a-468f-a9ef-65ac1307ffa0.dev.coze.site' + url.pathname + url.search);
}
