## The experiment

Start with a recognizable image. Use it to place sites in a plane, construct Voronoi cells, then deform the resulting mosaic. The proposed sequence is:

1. **Profile image.** Begin with a sample or an uploaded image.
2. **Voronoi cells.** Use image information to place the sites and summarize regions.
3. **Twist and return.** Warp the geometry, then unwind the spatial transformation.

The accompanying visual is a schematic of the idea, not a captured frame.

## Reversibility has a limit

The spatial warp may be invertible without the image representation being lossless. If a map T has an inverse, applying its inverse can recover the input *geometry* from the transformed geometry. It cannot, by itself, recover image information that was discarded before the warp.

In a Voronoi mosaic, each site defines a region consisting of points closer to that site than to the other sites. A finite collection of site positions and cell summaries usually contains less information than the original pixel image.

> The spatial warp is reversible. The sampled mosaic is not a lossless encoding of the image.

## Open questions

- How should edge information, color variation, and local structure affect site placement?
- How should a spatial warp be constructed to remain invertible?
- Which properties of a sampled image are worth preserving?
- How much error is visually acceptable when the geometry is restored?

## What is and is not published

This is a public description of the conceptual pipeline and its limitations. It is **not** a release of the site-placement algorithm, deformation parameters, implementation, or reproducible build.

The [adaptive attention study](entry.html?slug=adaptive-attention) shares the *coarse view, selective detail* motif, but is a separate experiment rather than a trace of this animation.
