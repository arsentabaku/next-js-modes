// https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#using-on-demand-revalidation

export default async function handler(req, res) {
  for (const url of req.body) {
    await res.unstable_revalidate(url);
  }
  res.status(200).json({ revalidate: true });
}
