export function middleware(context) {
  const { request, rewrite } = context;
  // 将所有请求重写（代理）到 Coze 项目地址
  return rewrite('https://zq8p5xnqrq.coze.site' + new URL(request.url).pathname);
}
