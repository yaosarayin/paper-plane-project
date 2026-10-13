# 纸飞机计划 The Paper Plane Project

Static website for [paperplaneproject.org](https://paperplaneproject.org), served by GitHub Pages from this branch.
Every file is plain HTML/CSS/JS — there is no build step. Push to this branch and the site updates within a minute or two.

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | Home page |
| `about/`, `blog/`, `events/`, `join/` | Section pages (each is an `index.html`) |
| `posts/YYYY-MM-DD/` | One folder per article (`-2`, `-3` suffix when two share a date) |
| `img/wx/` | Images from the WeChat articles |
| `img/site/` | Illustrations, partner logos, QR code |
| `assets/site.css`, `assets/site.js` | Shared styles; the English/中文 toggle and article filters |
| `2020/…`, `2021/…`, `resources/`, `programs/` | Redirects from the old site's URLs |
| `CNAME` | Custom domain for GitHub Pages |
| `sitemap.xml`, `robots.txt`, `404.html` | Search engines and the not-found page |

The 141 articles were imported from the WeChat official account 「纸飞机计划」 (2020-07 to 2024-08).
Each post links back to its WeChat original.

## Adding a new article

1. Copy an existing folder, e.g. `posts/2024-08-27/`, to `posts/<date>/` and edit its `index.html`:
   title (`<title>`, `<h1>`, `og:` tags), date, byline, body, the WeChat link in the note at the bottom,
   and the previous/next links.
2. Put images in `img/wx/` and reference them as `/img/wx/<file>`.
3. Add a card for it at the top of the right year in `blog/index.html` (copy an existing `<a class="card">`),
   and on the home page under 最新文章 if it should appear there.
4. Add its URL to `sitemap.xml`.

## English / 中文 toggle

The button in the top-right corner uses Google's free website translator. The choice is remembered with the
`googtrans` cookie, so it carries across pages. Labels with a `data-en` attribute (navigation, site name) use
fixed English text instead of machine translation. The button only appears when Google's script loads,
so it stays hidden in mainland China, where Google is blocked.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
