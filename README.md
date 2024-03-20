# Step 1: Initialize a new Node.js project
npm init -y
# Step 2: Install Hardhat
npm install --save-dev hardhat
# Step 3: Initialize a Hardhat project
npx hardhat init
# Step 4: Install other Packages
npm install --save-dev @openzeppelin/contracts dotenv
# Step 5: Set environmental variables
echo > .env
    HTTP_PROVIDER_URL="YOUR_QUICKNODE_ENDPOINT_HTTP_URL"
    PRIVATE_KEY="YOUR_WALLET_PRIVATE_KEY"
# Step 6: Set Hardhat configuration
# Step 7: Set TypeScript configuration

# Building the Token Contract:
    echo > contracts/ERC404.sol
    echo > contracts/My404.sol
npx hardhat compile

# Testing the Contract:
    echo > test/ERC404.ts
npx hardhat test

# Deploying the Contract to the Ethereum Sepolia:
    echo > scripts/deploy.ts
npx hardhat run scripts/deploy.ts --network sepolia

# Testing on the Testnet:
    echo > scripts/transferToken.ts
npx hardhat run scripts/transferToken.ts --network sepolia

# Verifying the Contract:
npm install --save-dev @nomiclabs/hardhat-etherscan
npx hardhat verify --network sepolia "contractaddress" "owneraddress"

# Creating a Pool on Uniswap V3 (optional)
## Step 1: Prepare ABI files:
mkdir abis
echo > abis/NonfungiblePositionManager.json
echo > abis/UniswapV3Factory.json
NonfungiblePositionManager: 0x1238536071E1c677A632429e3655c799b22cDA52
UniswapV3Factory: 0x0227628f3F023bb0B980b67D528571c95c6DaC1c
## Step 2: Define your pool parameters:
Token Addresses (token0 and token1): These addresses define the trading pair in the liquidity pool. Your ERC-404 token and WETH are used here to create a market for trading your token against a widely used and stable value reference, WETH.

Fee Tier (fee): The fee tier impacts how much traders will pay in fees and how much liquidity providers will earn. A 1% fee tier is chosen as an example, balancing the potential for earnings with attractiveness to traders.

Initial Price (sqrtPriceX96): The initial price sets the starting point for trading in the pool. It's encoded in a specific format used by Uniswap V3, reflecting the desired price ratio between the two tokens.
## Step 3: Prepare the script file:
echo > scripts/poolInitializer.ts
Replace the YOUR_ERC404_TOKEN_ADDRESS placeholder with your ERC404 token address.
## Step 4: Execute the script:
npx hardhat run scripts/poolInitializer.ts --network sepolia
## Step 5: Adding liquidity:
# Configuring the NFT Metadata using IPFS
To configure the NFT metadata for your ERC-404 token using IPFS, you'll primarily interact with the setTokenURI function within your smart contract