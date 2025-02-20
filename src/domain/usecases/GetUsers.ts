import { UserRepository } from "../../data/repositories/UserRepositoryImpl";
import { User } from "../entities/User";

export class GetUsers {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<User[]> {
    return await this.userRepository.getUsers();
  }
}
