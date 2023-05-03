import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { API_KEY, BASE_URI, axios } from "./_utils/setup";

describe("Contract APIs", function () {
  it("Get Contract ABI for Verified Contract Source Codes", async function () {
    try {
      const _req = await axios.get(
        `${BASE_URI}?module=contract&action=getabi&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=${API_KEY}`
      );
      expect(_req.data.status).to.be.equal("1");
      expect(_req.data.message).to.be.equal("OK");
    } catch (e) {
      // console.log(e);
      expect(e).to.be.null;
    }
  });

  it("Get Contract Source Code for Verified Contract Source Codes", async function () {
    try {
      const _req = await axios.get(
        `${BASE_URI}?module=contract&action=getsourcecode&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=${API_KEY}`
      );
      expect(_req.data.status).to.be.equal("1");
      expect(_req.data.message).to.be.equal("OK");
    } catch (e) {
      // console.log(e);
      expect(e).to.be.null;
    }
  });
});
