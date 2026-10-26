# web-bayek

Public site for [bayek.org](https://bayek.org), the Bayek group website (an Ivano Technologies affiliate).

Bayek Integrated Services and Bayek Construction. Pages follow the locked brand board (26 Oct 2026).

## Pages

- `/` Group home
- `/about` About the group
- `/integrated-services` Bayek Integrated Services
- `/construction` Bayek Construction
- `/contact` Contact and enquiry form

## Stack

Next.js App Router, TypeScript, pnpm. Montserrat via `next/font`. Design tokens in `src/styles/tokens.css` and `src/styles/tokens.json`. Brand assets live in `public/assets`.

## Local development

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Environment

Copy `.env.example` to `.env.local` and set values locally. Do not commit secrets.

| Name | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key used by the contact form on the server. If unset, the form runs in dry-run mode. |
| `CONTACT_DRY_RUN` | Set to `true` to force dry-run even when `RESEND_API_KEY` is present. The server logs the routed recipient and returns success without sending. |

Recipient addresses are chosen on the server from the form `topic` value. They are not sent to the browser.

Mail is sent from `no-reply@bayek.org` with reply-to set to the visitor.

## Contact routing

Server-only, by `topic`:

- `general` → general inbox
- `integrated-services` → Integrated Services inbox
- `construction` → Construction inbox

## Notes

- Integrated Services uses teal only. Green appears only in the wordmark E.
- The ribbon is on group pages only (Home, About, Contact).
- The street address is on the Contact page only.
- No phone numbers, `tel:` links or phone fields.
- Footer line: An Ivano Technologies affiliate.
