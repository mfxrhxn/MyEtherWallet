import ENSManagerInterface from './ENSManagerInterface.js';

export default class FifsNameModule extends ENSManagerInterface {
  constructor(name, address, network, web3, ens) {
    super(name, address, network, web3, ens);
  }

  register() {
    console.error('in here', this.registrarContract, this.registryContract)
    const address = this.address;
    const web3 = this.web3;
    const data = this.registrarContract.methods
      .register(this.labelHash, address)
      .encodeABI();
    const registerTx = {
      from: address,
      value: 0,
      to: this.registrarAddress,
      data: data
    };
    const setResolverTx = {
      from: address,
      to: this.network.type.ens.registry,
      data: this.registryContract.methods
        .setResolver(this.nameHash, this.publicResolverAddress)
        .encodeABI(),
      value: 0
    };
    return web3.mew.sendBatchTransactions(
      [registerTx, setResolverTx].filter(Boolean)
    );
  }

  transfer(toAddress) {
    return this.web3.eth.sendTransaction({
      from: this.address,
      to: toAddress,
      data: this.registryContract.methods
        .setOwner(this.nameHash, toAddress)
        .encodeABI(),
      value: 0
    });
  }
}
