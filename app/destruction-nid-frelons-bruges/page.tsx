import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LocalPageTemplate } from "@/components/LocalPageTemplate";
import { localPages } from "@/lib/localPages";

const data = localPages.bruges;

export const metadata: Metadata = buildMetadata({
  title: data.title,
  description: data.description,
  path: `/${data.slug}`,
});

export default function BrugesPage() {
  return (
    <LocalPageTemplate
      city={data.city}
      slug={data.slug}
      lead={data.lead}
      blocks={data.blocks}
      nearby={data.nearby}
    />
  );
}
