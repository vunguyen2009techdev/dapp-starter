//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract BoxV2 {
  uint256 private _value;

  event ValueChanged(uint256 value);

  function store(uint256 value) public {
    _value = value;
    emit ValueChanged(value);
  }

  function retrieve() public view returns (uint256) {
    return _value;
  }

  function increment() public {
    _value += 1;
    emit ValueChanged(_value);
  }
}