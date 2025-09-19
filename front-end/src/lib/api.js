
export async function fetchAPI(path) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}${path}`);
  if (!res.ok) {
    console.error("Failed to fetch", path);
    throw new Error(`Failed to fetch ${path}`);
  }
  return await res.json();
}
