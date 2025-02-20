import { CompanyRepo } from "../../data/repositories/CompanyRepo";
import { Company } from "../entities/Company";

export class GetCompanies {
  private companyRepo: CompanyRepo;
  constructor(companyRepo: CompanyRepo) {
    this.companyRepo = companyRepo;
  }

  async fetchAll(): Promise<Company[]> {
    return this.companyRepo?.getCompanies();
  }

  async fetchByName(companyName: string): Promise<Company> {
    return this.companyRepo?.getCompanyByName(companyName);
  }
}
