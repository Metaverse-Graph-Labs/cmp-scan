import { expect } from "chai";
import {
  API_KEY,
  APIInstance,
  axios,
  BASE_URI,
  WAITING_TIME,
} from "./_utils/setup";
import { ContractAPIs } from "./_utils/cmp-apis";
import { setTimeout } from "timers/promises";

describe("Contract APIs", function () {
  ContractAPIs.forEach((api: APIInstance) => {
    it(api.title, async function () {
      await setTimeout(WAITING_TIME);
      try {
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

  it.only("Verify & Publish Contract Source Code", async () => {
    await setTimeout(WAITING_TIME);
    try {
      const res = await axios.post(
        `${BASE_URI}module=contract&action=verify&apikey=${API_KEY}`,
        // {
        //   contract_address: "0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b",
        //   compiler_type: "SingleFile",
        //   compiler_version: "v0.8.13+commit.abaa5c0e",
        //   license_type: "MIT License",
        //   contract_code:
        //     '// SPDX-License-Identifier: MIT\npragma solidity ^0.8.12;\n\ncontract WCMP {\n    string public name     = "Wrapped CMP";\n    string public symbol   = "WCMP";\n    uint8  public decimals = 18;\n\n    event  Approval(address indexed src, address indexed who, uint value);\n    event  Transfer(address indexed src, address indexed dst, uint value);\n    event  Deposit(address indexed dst, uint value);\n    event  Withdrawal(address indexed src, uint value);\n\n    mapping (address => uint)                       public  balanceOf;\n    mapping (address => mapping (address => uint))  public  allowance;\n\n    receive() external payable {\n        deposit();\n    }\n    function deposit() public payable {\n        balanceOf[msg.sender] += msg.value;\n        emit Deposit(msg.sender, msg.value);\n    }\n    function withdraw(uint value) public {\n        require(balanceOf[msg.sender] >= value);\n        balanceOf[msg.sender] -= value;\n        payable(msg.sender).transfer(value);\n        emit Withdrawal(msg.sender, value);\n    }\n\n    function totalSupply() public view returns (uint) {\n        return address(this).balance;\n    }\n\n    function approve(address who, uint value) public returns (bool) {\n        allowance[msg.sender][who] = value;\n        emit Approval(msg.sender, who, value);\n        return true;\n    }\n\n    function transfer(address dst, uint value) public returns (bool) {\n        return transferFrom(msg.sender, dst, value);\n    }\n\n    function transferFrom(address src, address dst, uint value) public returns (bool)\n    {\n        require(balanceOf[src] >= value);\n\n        if (src != msg.sender) {\n            require(allowance[src][msg.sender] >= value);\n            allowance[src][msg.sender] -= value;\n        }\n\n        balanceOf[src] -= value;\n        balanceOf[dst] += value;\n\n        emit Transfer(src, dst, value);\n\n        return true;\n    }\n}',
        //   contract_name: "WCMP",
        //   evm_version: "default",
        //   abi: "",
        //   optimization: true,
        //   optimizer_runs: 200,
        // }
        {
          contract_address: "0xCA83158fA8247878Efda0cE5468850e26317cb50",
          compiler_type: "SingleFile",
          compiler_version: "v0.8.9+commit.e5eed63a",
          license_type: "MIT",
          Continue: false,
          contract_code:
            "// SPDX-License-Identifier: MIT\npragma solidity 0.8.9;\n\ncontract Messenger {\n    string public message;\n    address public lastUpdater;\n    \n    function setMessage(string memory _newMessage) external {\n        message = _newMessage;\n        lastUpdater = msg.sender;\n    }\n}\n",
          contract_name: "",
          evm_version: "default",
          abi: "",
          optimization: false,
          contract_library_address_list: [],
          optimizer_runs: 200,
        }
      );
      console.log(res);
      expect(res.data.status).to.be.equal(1);
      expect(res.data.message).to.be.equal("OK");
    } catch (e: any) {
      console.log(e);
      expect(e).to.be.null;
    }
  });
});
