// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract Messenger {
    string public message;
    address public lastUpdater;
    
    function setMessage(string memory _newMessage) external {
        message = _newMessage;
        lastUpdater = msg.sender;
    }
}
