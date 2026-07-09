/**
 * gcp-cloud-storage-sdk TypeScript declarations
 */
export interface GcpCloudStorageOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class GcpCloudStorage {
  constructor(options?: GcpCloudStorageOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default GcpCloudStorage;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
