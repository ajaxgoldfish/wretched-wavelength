---
title: editUrl Usage Example
description: Demonstrating the effect of editUrl in Starlight frontmatter.
editUrl: https://github.com/ajaxgoldfish/wretched-wavelength/blob/main/src/content/docs/ai-prompts/editurl-demo.md
---

## What is editUrl?

`editUrl` is an optional field in Starlight page frontmatter that controls the "Edit this page" link at the bottom of the page.

## Usage

### 1. Custom edit link

Set `editUrl` to a full URL in frontmatter; visitors will be taken to that address when they click "Edit this page":

```yaml
---
title: Page Title
editUrl: https://github.com/username/repo/edit/main/file-path
---
```

### 2. Hide edit link

Set `editUrl` to `false` to hide the edit link on that page:

```yaml
---
title: Page Title
editUrl: false
---
```

## Notes

This page has `editUrl` set. You can see the "Edit this page" link at the bottom. Clicking it will open the GitHub edit view (replace the repo URL with your actual repository).

If no global `editLink.baseUrl` is configured, page-level `editUrl` alone can still make the edit link appear.
