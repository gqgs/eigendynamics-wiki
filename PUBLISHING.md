# Publishing the EigenDynamics Wiki

The site is dependency-free and static. Markdown pages are in content/, and the public index is content/entries.json. Nothing is read automatically from private projects.

## Add an entry

1. Write content/new-slug.md.
2. Add metadata to content/entries.json: id, title, category, date (YYYY-MM or YYYY-MM-DD), kind, summary, tags, art, file, and optionally related IDs.
3. Choose an existing schematic visual type: voronoi, attention, julia, inversion, cathedral, or silk. Extend assets/site.js to add a new style.
4. Link between notes using the relative pattern entry.html?slug=entry-id.
5. Test locally with: python3 -m http.server 8000

The reader supports headings, paragraphs, unordered and ordered lists, quotes, emphasis, bold, inline code, fenced code, horizontal rules, and basic links. Raw HTML is escaped. Tables, embedded images, and math typesetting are not currently supported.

## Publication review

- Confirm the concepts and media were approved for public release.
- Never copy private source, unpublished data, builds, archives, credentials, or private deployment URLs into this repository.
- Clearly distinguish schematic artwork from actual experiment captures or measurements.
- Do not present speculation as a measured result.
- If the method is not fully disclosed, never imply that the note is sufficient to reproduce the experiment.
- Validate outbound URLs before publishing.
- Add a verified public runtime link only after a deliberate release decision.

## GitHub Pages

In the repository, open **Settings → Pages**, choose **Deploy from a branch**, then select **main** and **/(root)**.

Expected site URL once enabled: https://gqgs.github.io/eigendynamics-wiki/

The GitHub connection used to commit these files cannot activate Pages settings. This website needs no Actions workflow or access to the original private Atlas.
