export function middleware(context) {
  const { request, rewrite } = context;
  // https://75012b38-7e1a-468f-a9ef-65ac1307ffa0.dev.coze.site
  return rewrite('https://75012b38-7e1a-468f-a9ef-65ac1307ffa0.dev.coze.site' + new URL(request.url).pathname);
}
