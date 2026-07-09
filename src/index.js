/**
 * gcp-cloud-storage-sdk · sovereign wrapper for GCP Cloud Storage
 * Cloud Storage
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://cloud.google.com/storage/docs/apis
 * Homepage: https://cloud.google.com/storage
 */

export class GcpCloudStorage {
  constructor({ apiKey, baseURL = 'https://cloud.google.com/storage', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://cloud.google.com/storage/docs/apis. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('gcp-cloud-storage ' + res.status);
    return res.json();
  }
}

export default GcpCloudStorage;

// Metadata
export const meta = {
  "name": "GCP Cloud Storage",
  "category": "Cloud Storage",
  "homepage": "https://cloud.google.com/storage",
  "docs_url": "https://cloud.google.com/storage/docs/apis",
  "endpoints_count": 0
};
