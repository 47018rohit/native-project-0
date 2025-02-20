export interface Company {
  id: number;
  name: string;
  address: string;
  zip: string;
  country: string;
  employeeCount: number;
  industry: string;
  marketCap: number;
  domain: string;
  logo: string;
  ceoName: string;
}

export const tableHeader = ['Name' , 'Country' , 'Zip', 'Domain']