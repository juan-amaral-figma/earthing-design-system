export function assetUrl(fileName: string) {
  const baseUrl = import.meta.env.MODE === 'library'
    ? new URL(/* @vite-ignore */ './earthing/', import.meta.url).href
    : '/earthing/'
  return `${baseUrl}${fileName}`
}
