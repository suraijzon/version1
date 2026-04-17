// Vercel Edge Middleware — intercepts bot/crawler requests and serves
// fully-rendered HTML from prerender.io before the SPA bundle is touched.
// Runs on all Vercel deployments (no Next.js required).

const BOTS =
  /bot|crawler|spider|slurp|search|fetch|archive|extract|index|scrape|google|bing|yahoo|yandex|baidu|duckduck|teoma|facebook|twitter|linkedin|whatsapp|telegram|discord|slack|pinterest|reddit|applebot|chrome-lighthouse|prerender/i;

export const config = {
  matcher: [
    // Run on all paths except static assets and known file extensions
    '/((?!static/|.*\\.(?:js|css|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|eot|map|xml|txt|json)$).*)',
  ],
};

export default async function middleware(request) {
  const ua = request.headers.get('user-agent') ?? '';
  if (!BOTS.test(ua)) return; // not a bot — pass through

  const token = process.env.PRERENDER_TOKEN;
  if (!token) return; // env var not set — pass through rather than error

  try {
    const rendered = await fetch(
      `https://service.prerender.io/${request.url}`,
      {
        headers: {
          'X-Prerender-Token': token,
          'X-Prerender-Host': new URL(request.url).host,
        },
      }
    );

    if (!rendered.ok) return; // prerender failed — fall back to SPA

    return new Response(await rendered.text(), {
      status: rendered.status,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'X-Prerendered': '1',
      },
    });
  } catch {
    // Network error talking to prerender.io — fall back to SPA silently
  }
}
