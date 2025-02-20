# React Native Expo App with MVVM + Clean Architecture

## 📌 Project Overview
This project is a **React Native** application built with **Expo** and **TypeScript**, following the **MVVM (Model-View-ViewModel)** pattern and **Clean Architecture** principles. The goal is to maintain a modular, scalable, and maintainable codebase.

## 🚀 Tech Stack
- **Framework:** React Native (Expo)
- **Language:** TypeScript
- **State Management:** React Context / Zustand / Redux (choose one based on requirements)
- **Navigation:** React Navigation
- **API Requests:** Axios / Fetch
- **Dependency Injection:** InversifyJS (optional)

## 🏛️ Architecture Overview
This project follows **MVVM + Clean Architecture**, which separates concerns and enhances testability.

### 📂 Folder Structure
```
/root
│── src/
│   ├── app/                 # Application-level setup (Navigation, Providers)
│   │   ├── navigation/      # Navigation setup
│   ├── presentation/        # UI Layer (Screens, Components, Hooks, Styles)
│   │   ├── screens/         # Screen Components (View Layer)
│   │   ├── components/      # Reusable Components
│   │   ├── hooks/           # Custom Hooks
│   │   ├── theme/           # Global Styles & Themes
│   ├── domain/              # Business Logic Layer (Entities, Use Cases, Interfaces)
│   │   ├── entities/        # Core domain models
│   │   ├── usecases/        # Business rules and interactors
│   │   ├── interfaces/      # Interface contracts
│   ├── data/                # Data Layer (Repositories, API, Local Storage)
│   │   ├── repositories/    # Data repositories
│   │   ├── sources/         # API, Local Storage, Firebase, etc.
│   │   ├── models/          # DTOs and Response Models
│   ├── core/                # Core Configurations (Utilities, Helpers, Constants)
│   ├── assets/              # Images, Fonts, etc.
│── tests/                   # Unit and Integration Tests
│── App.tsx                  # Main Entry File
│── package.json             # Dependencies and Scripts
│── README.md                # Documentation
```

## 🔥 Key Principles
- **Separation of Concerns:** Clearly defined layers to ensure reusability and scalability.
- **Single Responsibility Principle:** Each module/class should have only one reason to change.
- **Dependency Injection:** Components depend on interfaces instead of concrete implementations.
- **Testability:** Easier unit testing due to the separation of concerns.

## 🛠️ Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```sh
   expo start
   ```

4. Run the application:
   ```sh
   expo start --android  # For Android
   expo start --ios      # For iOS (Mac required)
   ```

## 📌 MVVM Implementation
### **View (Presentation Layer - UI & Screens)**
- Contains screens and UI logic.
- Uses **ViewModel** to interact with the data.
- Example:
  ```tsx
  import React, { useEffect } from 'react';
  import { View, Text } from 'react-native';
  import { useUserViewModel } from '../viewmodels/UserViewModel';

  const UserScreen = () => {
      const { user, fetchUser } = useUserViewModel();
      
      useEffect(() => {
          fetchUser();
      }, []);
      
      return (
          <View>
              <Text>{user.name}</Text>
          </View>
      );
  };
  export default UserScreen;
  ```

### **ViewModel (Handles State & Business Logic)**
- Interacts with **UseCases** and **Repositories**.
- Example:
  ```tsx
  import { useState } from 'react';
  import { getUserUseCase } from '../../domain/usecases/GetUserUseCase';

  export const useUserViewModel = () => {
      const [user, setUser] = useState(null);
      
      const fetchUser = async () => {
          const data = await getUserUseCase();
          setUser(data);
      };
      
      return { user, fetchUser };
  };
  ```

### **UseCase (Business Logic Layer)**
- Contains business logic, calls repositories.
- Example:
  ```tsx
  import { UserRepository } from '../repositories/UserRepository';

  export const getUserUseCase = async () => {
      return await UserRepository.getUser();
  };
  ```

### **Repository (Data Layer)**
- Fetches data from API, Database, or Cache.
- Example:
  ```tsx
  import axios from 'axios';

  export const UserRepository = {
      getUser: async () => {
          const response = await axios.get('https://api.example.com/user');
          return response.data;
      }
  };
  ```

## 🧪 Testing
Run unit tests:
```sh
npm test
```

## 📌 Best Practices
- Follow **MVVM + Clean Architecture** strictly.
- Use **TypeScript** for better type safety.
- Keep UI logic separate from business logic.
- Use **Custom Hooks** to encapsulate ViewModel logic.
- Write **Unit Tests** for core business logic.

## 🤝 Contribution Guidelines
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a Pull Request.

---
**Author:** Rohit Prakash | [LinkedIn](https://www.linkedin.com/in/rohit-prakash-7a07491a0) | [GitHub](https://github.com/47018rohit)

