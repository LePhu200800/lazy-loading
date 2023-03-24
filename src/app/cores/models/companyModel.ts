export interface CompanyInfo  {
    id?: string | null,
    name?: string,
    location?: string
}

export const CompanyMode = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
}