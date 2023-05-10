// import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
// import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
// import { expect } from "chai";
// import { ethers } from "hardhat";
// import { API_KEY, BASE_URI, axios } from "./_utils/setup";

// describe("CRC-20 APIs", function () {
//   it("Get CRC20-Token TotalSupply by ContractAddress", async function () {
//     try {
//       const _req = await axios.get(
//         `${BASE_URI}?module=stats&action=tokensupply&contractaddress=0x57d90b64a1a57749b0f932f1a3395792e12e7055&apikey=${API_KEY}`
//       );
//       expect(_req.data.status).to.be.equal("1");
//       expect(_req.data.message).to.be.equal("OK");
//     } catch (e) {
//       // console.log(e);
//       expect(e).to.be.null;
//     }
//   });

//   it("Get CRC20-Token Circulating Supply by ContractAddress", async function () {
//     try {
//       const _req = await axios.get(
//         `${BASE_URI}module=stats&action=tokenCsupply&contractaddress=0x57d90b64a1a57749b0f932f1a3395792e12e7055&apikey=${API_KEY}`
//       );
//       //   expect(_req.data.status).to.be.equal("1");
//       expect(_req.data.message).to.be.equal("OK");
//     } catch (e) {
//       console.log(e);
//       expect(e).to.be.null;
//     }
//   });

//   it("Get CRC20-Token Account Balance for TokenContractAddress", async function () {
//     try {
//       const _req = await axios.get(
//         `${BASE_URI}?module=account&action=addresstokenbalance&address=0x57d90b64a1a57749b0f932f1a3395792e12e7055&page=1&offset=100&apikey=${API_KEY}`
//       );
//       expect(_req.data.status).to.be.equal("1");
//       expect(_req.data.message).to.be.equal("OK");
//     } catch (e) {
//       //   console.log(e);
//       expect(e).to.be.null;
//     }
//   });
// });
