# NH Marine Global Website

This is the production website for `nhmarineglobal.com`, built with Create React App and deployed as a static site.

## Local development

```bash
npm install
npm start
```

## Production build

```bash
npm run build
```

The production files are generated in `build/`.

## Environment variable

Create a `.env` file from `.env.example` and set:

```bash
REACT_APP_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

For Vercel, add the same variable in:

`Project Settings -> Environment Variables`

## Recommended launch setup

Use Vercel for hosting and keep GoDaddy only as the domain registrar and DNS manager.

### Vercel

1. Push this project to GitHub.
2. In Vercel, choose `Add New -> Project`.
3. Connect the GitHub repository.
4. Use these build settings:

```txt
Build command: npm run build
Output directory: build
```

5. Add `REACT_APP_WEB3FORMS_ACCESS_KEY` in Vercel environment variables for Production, Preview, and Development.
6. Deploy the site.
7. Add the custom domain `nhmarineglobal.com`.

### GoDaddy DNS

Point the domain to Vercel from GoDaddy DNS after Vercel gives you the target records.

Common setup:

```txt
Type: A
Host: @
Value: 76.76.21.21

Type: CNAME
Host: www
Value: cname.vercel-dns.com
```

Important: use the exact values shown by Vercel in case they differ.

## Launch checklist

1. Deploy from Vercel.
2. Add `nhmarineglobal.com` and `www.nhmarineglobal.com` in Vercel domains.
3. Update GoDaddy DNS records to the values Vercel gives you.
4. Wait for DNS propagation.
5. Verify:
   - `https://nhmarineglobal.com`
   - `https://www.nhmarineglobal.com`
   - `https://nhmarineglobal.com/contact`
   - `https://nhmarineglobal.com/quote`
   - quote and contact form submissions reach `ops@nhmarineglobal.com`

## Notes

- `vercel.json` includes rewrites so React routes work on direct page refreshes.
- `public/sitemap.xml` and `public/robots.txt` are configured for the live domain.
