import Donate from "@/components/Donate";
import { fetchAPI } from "@/lib/api";

export default async function DonatePage() {
  const donate = await fetchAPI("/donate").catch(() => null);

  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Donate</h1>
      <Donate donateLink={donate?.url} preview={false} />
    </main>
  );
}
