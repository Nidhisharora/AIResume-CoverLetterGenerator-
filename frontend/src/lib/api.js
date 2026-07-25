const BASE_URL = "http://localhost:8000";

export async function callApi(endpoint, payload) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}

export function toList(str) {
  return str.split(",").map((s) => s.trim()).filter(Boolean);
}