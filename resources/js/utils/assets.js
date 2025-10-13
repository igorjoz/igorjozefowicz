/**
 * Helper function to generate asset URLs from storage paths
 * Mimics Laravel's Storage::url() functionality
 */
export function storageUrl(path) {
    // Remove 'public/' prefix if it exists
    const cleanPath = path.replace(/^public\//, '');
    return `/storage/${cleanPath}`;
}

/**
 * Hook to get asset URL (can be extended later)
 */
export function useAsset(path) {
    return storageUrl(path);
}
