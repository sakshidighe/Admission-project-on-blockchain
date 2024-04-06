const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("LockModule", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const lock = m.contract("StudentAdmission", [],{
    value: lockedAmount,
  });
  const deployedAddress = lock;

  console.log("Contract deployed at:", deployedAddress);
  return { lock };
});
//0xf4BC4d119A635d46a6c8a2f813f40A11764A77e5
//target address

//address: '0x076753e977643d1cC75dAD6D5606d54f4a9b2865',