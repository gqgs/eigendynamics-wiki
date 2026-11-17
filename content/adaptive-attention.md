## A separate computational question

Suppose a query must attend over many keys and values, but evaluating all of them exactly is too expensive. Could we group them into cells, maintain compact summaries, and spend a finite budget only where a finer computation is expected to matter?

This research sketch is independent of the visual Voronoi animation, despite sharing an organizational idea.

## Three decisions

1. **Summarize a cell.** Retain a mean and a compact sketch of how keys and values vary together.
2. **Score against the query.** Estimate how opening a cell might change the normalized output.
3. **Spend the budget.** Keep, split, or read cells exactly; compare allocation strategies such as greedy refinement and a Prolog formulation.

Normalized attention introduces a complication: a change in one region can affect the balance of the entire result. A local score must therefore be judged against the global output it tries to predict.

## What would count as evidence?

A promising outline is not a validated algorithm. Evaluation would require workloads, an exact or otherwise defensible baseline, and measurements including output error, runtime, memory use, and sensitivity to different query distributions.

**No benchmark result or performance advantage is claimed in this note.**

## Connections and limits

See [From Image to Cell](entry.html?slug=from-image-to-cell) for the independent visual study. The shared phrase *keep the coarse view; reveal detail where it matters* is an analogy, not an assertion that both experiments use the same method.

The exact scoring rule, code, optimization formulation, and experimental data are not published here.
