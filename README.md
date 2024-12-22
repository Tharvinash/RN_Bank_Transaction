# Fintech App - Transaction History Module

## General Information

The **Transaction History** module is a core feature of the fintech app built using **React Native**, **TypeScript**, and **PostgreSQL (Neon DB)**. This module provides users with secure access to their transaction history, allowing them to view recent transactions, securely authenticate with fingerprint login, and display detailed information about each transaction. The app is designed with security and efficiency in mind, offering features like **masked transaction values**, **pull-to-refresh**, and **available cards** display. 

(**User andriod device / Android emulator for better experience. Thank you** )

### Features:
- **Fingerprint Authentication**: Secure login using biometric data such as fingerprint.
- **Masked Transaction Values**: The transaction amount is displayed in a masked format for enhanced security.
- **Pull-to-Refresh**: Users can refresh the transaction history list to get the most up-to-date data.
- **Available Cards**: Users can view a list of available cards associated with their account.
- **Transaction Information**: Detailed information about each transaction, including the amount, date, and recipient.
- **Error Handling**: Proper error handling for authentication, data fetching, and transaction errors.

### Tech Stack:
- **Frontend**: React Native, TypeScript
- **Backend**: PostgreSQL (Neon DB)
- **Authentication**: Fingerprint authentication via `expo-local-authentication`
- **State Management**: Zustand
- **Routing**: Expo Routing & Api Routes
- **Styling**: NativeWind for utility-first CSS

---

## Setup

To get started with the app, follow the steps below:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npx expo start --clear
```

## Screenshots
![Transaction App](https://github.com/user-attachments/assets/d70c1a46-6d30-447b-a277-774ea23125ca)
