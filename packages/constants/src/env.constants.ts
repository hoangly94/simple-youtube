const env = import.meta.env;

export const assetUrl = env.VITE_ASSET_URL;
export const apiUrl = env.VITE_API_URL;
export const uploadAPI = `${apiUrl}upload`;
export const youtubeApiKey = env.VITE_YOUTUBE_API_KEY;
