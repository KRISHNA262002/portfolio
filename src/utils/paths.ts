/**
 * Utility to handle asset paths correctly across dev and production (GitHub Pages)
 */
export const getAssetUrl = (path: string) => {
  if (!path) return '';
  // If it's already a full URL or a relative path not starting with /, return as is
  if (path.startsWith('http') || path.startsWith('data:') || !path.startsWith('/')) {
    return path;
  }
  
  const base = import.meta.env.BASE_URL;
  // Combine base and path, ensuring we don't have double slashes
  return `${base.endsWith('/') ? base.slice(0, -1) : base}${path}`;
};
