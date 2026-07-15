declare module '@apiverve/reversednslookup' {
  export interface reversednslookupOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface reversednslookupResponse {
    status: string;
    error: string | null;
    data: ReverseDNSLookupData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface ReverseDNSLookupData {
      ip:       null | string;
      hostname: null | string;
      ptr:      (null | string)[];
      found:    boolean | null;
  }

  export default class reversednslookupWrapper {
    constructor(options: reversednslookupOptions);

    execute(callback: (error: any, data: reversednslookupResponse | null) => void): Promise<reversednslookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: reversednslookupResponse | null) => void): Promise<reversednslookupResponse>;
    execute(query?: Record<string, any>): Promise<reversednslookupResponse>;
  }
}
