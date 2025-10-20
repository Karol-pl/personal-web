const isDev = import.meta.env.DEV;
const API_KEY = isDev
  ? import.meta.env.NASA_DEMO_KEY
  : import.meta.env.NASA_API_KEY;

export async function getApod() {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
    );
    if (!response.ok) {
      throw new Error(`API responded with ${response.status}`);
    }

    const data = await response.json();
    return { data, error: null };
  } catch (e) {
    console.error("Error fetching NASA APOD data:", e);
    return { data: null, error: e };
  }
}
