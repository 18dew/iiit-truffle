const Migrations = artifacts.require("Migrations");
const kycRegis= artifacts.require("kycRegis");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(kycRegis);
};
