// Assuming Web3.js is already included
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const abi = [ /* ABI from the compiled contract */ ];

const contract = new web3.eth.Contract(abi, contractAddress);

async function vote(candidateId) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.vote(candidateId).send({ from: accounts[0] });
}
