import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { API_KEY, BASE_URI, axios } from "./_utils/setup";

describe("Transaction APIs", function () {
  it("Check Transaction receipt status", async function () {
    try {
      const _req = await axios.get(
        `${BASE_URI}?module=transaction&action=gettxreceiptstatus&txhash=0x513c1ba0bebf66436b5fed86ab668452b7805593c05073eb2d51d3a52f480a76&apikey=${API_KEY}`
      );
      expect(_req.data.status).to.be.equal("1");
      expect(_req.data.message).to.be.equal("OK");
    } catch (e) {
      // console.log(e);
      expect(e).to.be.null;
    }
  });
});
