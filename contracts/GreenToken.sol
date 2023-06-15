// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GreenToken is ERC20, ERC20Burnable, Ownable {
    mapping (address => uint) mints;
    constructor() ERC20("Green Token # 2", "GREEN2") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
        mints[msg.sender] = amount;
    }
}