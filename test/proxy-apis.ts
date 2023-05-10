import { expect } from "chai";
import { APIInstance, axios, WAITING_TIME } from "./_utils/setup";
import { ProxyAPIs } from "./_utils/cmp-apis";
import { setTimeout } from "timers/promises";

describe("Proxy APIs", function () {
  ProxyAPIs.forEach((api: APIInstance) => {
    it(api.title, async function () {
      await setTimeout(WAITING_TIME);
      try {
        const res = await axios.get(api.path);
        console.log(res.data);
        expect(res.data.result).to.be.not.null;
        // expect(res.data.message).to.be.equal("OK");
      } catch (e: any) {
        expect(e).to.be.null;
      }
    });
  });
});
