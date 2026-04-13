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

For Netlify, add the same variable in:

`Site configuration -> Environment variables`

## Recommended launch setup

Use Netlify for hosting and keep GoDaddy only as the domain registrar and DNS manager.

### Netlify

1. Push this project to GitHub.
2. In Netlify, choose `Add new site -> Import an existing project`.
3. Connect the GitHub repository.
4. Use these build settings:

```txt
Build command: npm run build
Publish directory: build
```

5. Add `REACT_APP_WEB3FORMS_ACCESS_KEY` in Netlify environment variables.
6. Deploy the site.
7. Add the custom domain `nhmarineglobal.com`.

### GoDaddy DNS

Point the domain to Netlify from GoDaddy DNS after Netlify gives you the target records.

Common setup:

```txt
Type: A
Host: @
Value: 75.2.60.5

Type: CNAME
Host: www
Value: your-netlify-subdomain.netlify.app
```

Important: use the exact values shown by Netlify in case they differ.

## Launch checklist

1. Deploy from Netlify.
2. Add `nhmarineglobal.com` and `www.nhmarineglobal.com` in Netlify domains.
3. Update GoDaddy DNS records to the values Netlify gives you.
4. Wait for DNS propagation.
5. Verify:
   - `https://nhmarineglobal.com`
   - `https://www.nhmarineglobal.com`
   - `https://nhmarineglobal.com/contact`
   - contact form submission

## Notes

- `public/_redirects` is included so React routes work on direct page refreshes.
- `public/sitemap.xml` and `public/robots.txt` are configured for the live domain.
