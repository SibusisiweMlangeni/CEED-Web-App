import SocialFootprint from "@/components/SocialFootprint";
import { fetchAPI } from "@/lib/api";

export default async function SocialFootprintPage() {
  const footprint = await fetchAPI("/footprint").catch(() => []);

  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Our Social Footprint</h1>
      <SocialFootprint stats={footprint} preview={false} />
    </main>
  );
}
