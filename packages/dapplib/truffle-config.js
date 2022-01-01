require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note rifle unhappy grace derive supply general'; 
let testAccounts = [
"0x47ae7cc96cb7811a79069edbc6e566c60ea2f08c66aebc85d53c9ccc7bf120a4",
"0x264c78b001b641ac66195abdf886114a37f88f2b1b056d6ce63a0ef57e36142b",
"0x682a30aa2a737aff985eb203d9aba7e020d21a2eacd1b53fb92004ec6466eb08",
"0xf60ae9906109cb12ffa277637208c2cf651eeb57237f4e54d5798f35e1732351",
"0x1425889f52bcd555f0ba7ca76522326200eabd19cca7a2b7287973b37df6ba0e",
"0x69dc2f47b31763d960357ff8e51e96a8103cb20996402407e9c911fe7e644cc6",
"0x9e7cc785e94791d2fb4e26ad6aba33831aca5cc2f00191225058ea76224c08d1",
"0x80650feea4755127d2ca24434f03709efd04d0914921a534f2c405dc8ea472d4",
"0x6c94fb7b3ada5407dc72f2cbd03023cd5033b508d1c42defc2a8db950af96b81",
"0x687c183efb64395e7fa1f614787bd162ba227927a154dd21752df903e8ce26d2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


