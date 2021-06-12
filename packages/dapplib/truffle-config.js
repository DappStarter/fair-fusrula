require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food guard rifle six pulse gentle light army genre'; 
let testAccounts = [
"0xd3e5b6363ea6b187b6a22717d869e97e0dcb3abde2a7b569d907396a3a2ddf5a",
"0xe4a1e2f43cfc71f28c9a48461400a90c2bc8ba4f3fee94d0edd77e08b28331be",
"0x928ad6e044257c1c292489837213c5883161191359feb2d2dbb487439fbfe9ee",
"0x344e6f3b77f811bb73d6d8170e951ce6d17b5caa7db1593cef0d2ceba55c5abd",
"0xf47a1eea9312acbb8c8b879fe00fadd6341a930a0b6da9069f89510001f72f7a",
"0xf591a0aee09f90f7cc15159447cb2252a1c313ff1c5c83611fc1457fd4b41219",
"0xae9af9240fc52c2d02fc5d0a68c3befc27cec45ac02a24e02a3769968b266b96",
"0x0bb316f7fd77f3fd818c48f4e80da903c27a3ebcec5bd40e67da14b8559521da",
"0x8da004584b05f6f101ed21d0877b03c6a92e20617d327a8aeafc9bcae424bb07",
"0x0ed915ee0b96d77d0956a451037cba31c2557bb0822c289dcc82f2f1033cfeb3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

