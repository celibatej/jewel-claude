/**
 * Renders a JSON-LD <script> block. Content is trusted, app-generated data
 * (not user input), so dangerouslySetInnerHTML is safe here.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
