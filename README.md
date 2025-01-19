# IdentifyMe: Decentralized Profile Management

IdentifyMe is a decentralized application (dApp) that empowers users to create, manage, and share profiles securely on the blockchain. By leveraging Ethereum smart contracts, this platform ensures data privacy, transparency, and user control over personal and professional information.

## Features

- **Secure Decentralized Profiles**: Users can create and manage profiles securely stored on-chain.
- **Customizable Visibility**: Control visibility of personal and professional details.
- **Wallet-Based Access**: Profiles are accessible via wallet addresses or unique usernames.
- **Edit Profile Functionality**: Seamlessly update profile information while maintaining data integrity.
- **Privacy and Transparency**: Integrated secure on-chain storage ensures complete data privacy and transparency.

## Tech Stack

- **Smart Contracts**: Solidity
- **Development Framework**: Hardhat
- **Frontend**: Next.js, TypeScript
- **Blockchain Interaction**: Ethers.js

## Installation

### Prerequisites
- Node.js (v16 or later)
- Yarn or npm
- MetaMask or any compatible Ethereum wallet
- Hardhat CLI

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/pk1427/identity-dapp.git
   cd identity-dapp
   ```

2. **Install Dependencies**:
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Compile Smart Contracts**:
   ```bash
   npx hardhat compile
   ```

4. **Deploy Contracts**:
   Configure the `hardhat.config.ts` file with your network settings (e.g., Infura or Alchemy API keys) and deploy:
   ```bash
   npx hardhat run scripts/deploy.ts --network <network_name>
   ```

5. **Start the Development Server**:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

   The application will be accessible at `http://localhost:3000`.

## Smart Contract

The smart contracts are written in Solidity and ensure:
- Decentralized and secure storage of user profiles.
- Controlled access and visibility of profile details.
- Robust functionality for editing and updating profiles.

Key contracts can be found in the `/contracts` directory.

## Frontend

The frontend is built using Next.js and integrates:
- **Ethers.js** for blockchain interaction.
- Responsive design for an optimal user experience.

Component and page structure is organized in the `/pages` and `/components` directories.

## Usage

1. Connect your Ethereum wallet (MetaMask or similar) to the dApp.
2. Create a new profile by providing the required details.
3. Update your profile using the **Edit Profile** feature.
4. Control the visibility of your profile details.

## Scripts

- **Compile Contracts**:
  ```bash
  npx hardhat compile
  ```
- **Run Tests**:
  ```bash
  npx hardhat test
  ```
- **Deploy Contracts**:
  ```bash
  npx hardhat run scripts/deploy.ts --network <network_name>
  ```

## Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

For any questions or suggestions, reach out:
- **Author**: Prasad Kapure
- **Email**: [prasadkapure553@gmail.com](mailto:prasadkapure553@gmail.com)
- **GitHub**: [pk1427](https://github.com/pk1427)

## Acknowledgments

- Ethereum development community for their invaluable resources.
- Open-source contributors for libraries and tools used in this project.

---

Build a decentralized future with IdentifyMe 🚀
