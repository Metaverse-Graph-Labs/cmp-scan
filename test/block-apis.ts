import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { API_KEY, BASE_URI, axios } from "./_utils/setup";

describe("Block APIs", function () {
  it("Get Block Rewards by BlockNo", async function () {
    try {
      const _req = await axios.get(
        `${BASE_URI}?module=block&action=getblockreward&blockno=2165403&apikey=${API_KEY}`
      );
      expect(_req.data.status).to.be.equal("1");
      expect(_req.data.message).to.be.equal("OK");
    } catch (e) {
      // console.log(e);
      expect(e).to.be.null;
    }
  });

  it("Get Estimated Block Countdown Time by BlockNo", async function () {
    try {
      const _req = await axios.get(
        `${BASE_URI}?module=block&action=getblockcountdown&blockno=17183158&apikey=${API_KEY}`
      );
      expect(_req.data.status).to.be.equal("1");
      expect(_req.data.message).to.be.equal("OK");
    } catch (e) {
      // console.log(e);
      expect(e).to.be.null;
    }
  });

  it("Get Block Number by Timestamp", async function () {
    try {
      const _req = await axios.get(
        `${BASE_URI}?module=block&action=getblocknobytime&timestamp=1578638524&closest=before&apikey=${API_KEY}`
      );
      expect(_req.data.status).to.be.equal("1");
      expect(_req.data.message).to.be.equal("OK");
    } catch (e) {
      // console.log(e);
      expect(e).to.be.null;
    }
  });
});
