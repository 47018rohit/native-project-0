import axios from "axios";
import { Company } from "../../domain/entities/Company";

export interface CompanyRepo {
  getCompanies(): Promise<Company[]>;
  getCompanyByName(companyName: string): Promise<Company>;
  getCompanyById(companyId: number): Promise<Company>;
}

export class CompanyRepoImpl implements CompanyRepo {
  async getCompanies(): Promise<Company[]> {
    try {
      const response = await axios.get<Company[]>(
        "https://fake-json-api.mock.beeceptor.com/companies"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
  async getCompanyByName(companyName: string): Promise<Company> {
    try {
      const response = await axios.get<Company>(
        "https://fake-json-api.mock.beeceptor.com/companies"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error
    }
  }
  async getCompanyById(companyId: number): Promise<Company> {
      try {
        const response = await axios.get<Company>("https://fake-json-api.mock.beeceptor.com/companies")
        return response.data
      }catch(error){
        console.error("Error fetching users:", error);
        throw error
      }
  }
}
