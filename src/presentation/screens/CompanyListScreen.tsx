import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { DataTable } from "react-native-paper";
import { Company, tableHeader } from "../../domain/entities/Company";
import { GetCompanies } from "../../domain/usecases/GetCompanys";
import { CompanyRepoImpl } from "../../data/repositories/CompanyRepo";

const CompanyListScreen = () => {
  const [companyData, setCompanyData] = useState<Company[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repo = new CompanyRepoImpl();
        const companies = new GetCompanies(repo);
        const response = await companies.fetchAll(); // ✅ Fixed method name
        setCompanyData(response);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <DataTable>
        {/* Table Header */}
        <DataTable.Header>
          {tableHeader.map((header, index) => (
            <DataTable.Title key={`header-${index}`}>{header}</DataTable.Title>
          ))}
        </DataTable.Header>

        {/* Table Rows */}
        {companyData.map((company, rowIndex) => (
          <DataTable.Row key={`row-${company.id}`}>
            {tableHeader.map((header, cellIndex) => (
              <DataTable.Cell key={`cell-${rowIndex}-${cellIndex} - ${header}`}>
                {company[header.toLowerCase() as keyof Company] ?? "N/A"}
              </DataTable.Cell>
            ))}
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

export default CompanyListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
