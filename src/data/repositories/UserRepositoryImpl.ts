import axios from "axios";
import { User } from "../../domain/entities/User";

export interface UserRepository {
  getUsers(): Promise<User[]>;  
  getUser(userId: number): Promise<User>;  
}


export class UserRepositoryImpl implements UserRepository {
  async getUsers(): Promise<User[]> {
    try {
      const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }

  async getUser(userId: number): Promise<User> {
    try {
      const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw new Error("User not found");
    }
  }
}
