declare module '@apiverve/reversednslookup' {
  export interface reversednslookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface reversednslookupResponse {
    status: string;
    error: string | null;
    data: ReverseDNSLookupData;
    code?: number;
  }


  interface ReverseDNSLookupData {
      ip:       string;
      hostname: string;
      ptr:      string[];
      found:    boolean;
  }

  export default class reversednslookupWrapper {
    constructor(options: reversednslookupOptions);

    execute(callback: (error: any, data: reversednslookupResponse | null) => void): Promise<reversednslookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: reversednslookupResponse | null) => void): Promise<reversednslookupResponse>;
    execute(query?: Record<string, any>): Promise<reversednslookupResponse>;
  }
}
