import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";
import { User } from "../../domain/entities/User";
import { UserRepositoryImpl } from "../../data/repositories/UserRepositoryImpl";
import { GetUsers } from "../../domain/usecases/GetUsers";

const DashboardScreen = ({navigation}: any) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const repository = new UserRepositoryImpl();
      const useCase = new GetUsers(repository);
      const result = await useCase.execute();
      setUsers(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Button
        onPress={() => navigation.navigate("Companies")}
        title="Go to Company Lists"
      />
      {/* Stats Section */}
      <View style={styles.stats}>
        <Text style={styles.statItem}>Users: {users.length}</Text>
        <Text style={styles.statItem}>Orders: 120</Text>
        <Text style={styles.statItem}>Revenue: $5,000</Text>
      </View>

      {/* Users List */}
      <Text style={styles.subtitle}>User List:</Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={styles.userItem}>
              {item.name} - {item.email}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  statItem: { fontSize: 16, fontWeight: "bold", color: "blue" },
  subtitle: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  userItem: { fontSize: 14, paddingVertical: 4 },
});
