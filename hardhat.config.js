require("@nomicfoundation/hardhat-toolbox")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
        // sepolia: {
        //     url: SEPOLIA_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        //     chainId: 11155111,
        //     blockConfirmations: 5,
        // },
        // goerli: {
        //     url: GOERLI_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        //     chainId: 5,
        //     blockConfirmations: 5,
        // },
    },
    solidity: "0.8.18",
}
