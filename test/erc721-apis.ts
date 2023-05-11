import { expect } from "chai";
import { APIInstance, axios, WAITING_TIME } from "./_utils/setup";
import { NFTAPIs } from "./_utils/cmp-apis";
import { setTimeout } from "timers/promises";

describe("NFT APIs", function () {
  NFTAPIs.forEach((api: APIInstance) => {
    it(api.title, async function () {
      await setTimeout(WAITING_TIME);
      try {
        const res = await axios.get(api.path);
        console.log(res.data);
        expect(res.data.status).to.be.equal(1);
        expect(res.data.message).to.be.equal("OK");
      } catch (e: any) {
        // console.log(e.message);
        expect(e).to.be.null;
      }
    });
  });
});
