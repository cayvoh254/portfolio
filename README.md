# kevingitau.dev

Personal portfolio for Kevin Gitau — Security Operations Engineer based in Nairobi, Kenya.

Built with Next.js 16, Tailwind CSS v4, and TypeScript. Deployed on Vercel.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with CSS custom properties
- **Fonts**: Inter + Playfair Display via `next/font/google`
- **Deployment**: Vercel + kevingitau.dev (Cloudflare DNS)

## Development

```bash
npm install
npm run dev
```

## Security

Security headers configured in `next.config.ts`:
- Content Security Policy
- Strict-Transport-Security with preload
- X-Frame-Options: DENY
- Permissions-Policy restricting unused browser APIs
- X-Content-Type-Options: nosniff

Security contact: `/.well-known/security.txt`
