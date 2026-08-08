# Felix Phan portfolio — live static export

Source deployment: https://felix-phan-portfolio.anh022145.chatgpt.site/

This ZIP is a **portable static reconstruction of the live public site**, not the private/original ChatGPT Sites source project. The available chat tools can read the published routes but do not expose the Site's internal source-project export.

## Included
- Homepage
- Work index
- About
- Experience
- Interests
- Contact
- 30 project routes under `/work/`
- `source_manifest.json` showing recovery fidelity per project
- Editable static CSS and JavaScript

## Fidelity
Project pages marked `full: true` in the manifest were recoverable from the public crawler. Other project routes returned a crawler cache miss; for those pages the export preserves the live Work-index title, year/type, categories and challenge and explicitly avoids inventing missing detail copy.

## Run locally
From the extracted folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000/
