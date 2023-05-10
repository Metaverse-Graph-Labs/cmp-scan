import { expect } from "chai";
import { APIInstance, axios, WAITING_TIME } from "./_utils/setup";
import { TransactionAPIs } from "./_utils/cmp-apis";
import { setTimeout } from "timers/promises";

describe("Transaction APIs", function () {
  TransactionAPIs.forEach((api: APIInstance) => {
    it(api.title, async function () {
      try {
        await setTimeout(WAITING_TIME);
        const res = await axios.get(api.path);
        console.log(res.data);
        expect(res.data.status).to.be.equal(1);
        expect(res.data.message).to.be.equal("OK");
      } catch (e: any) {
        console.log(e.message);
        expect(e).to.be.null;
      }
    });
  });
});
