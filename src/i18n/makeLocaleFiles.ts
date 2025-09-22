export function makeLocaleFiles<L extends string>(
  locale: L,
  files: { name: string; url: string }[],
) {
  return files.map((f) => ({
    ns: f.name,
    importFn: async (): Promise<{ default: Record<string, unknown> }> =>
      import(`../messages/${locale}${f.url}`),
  }));
}
