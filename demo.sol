pragma solidity ^0.4.0;

contract HelloWorld {
  string name = "alincode";
  string name2 = "alincode2";

  function setName(string _name) public {
    name = _name;
  }

  function getName() public view returns (string) {
    return name;
  }
  
  function setName2(string _name) public {
    name2 = _name;
  }

  function getName2() public view returns (string) {
    return name2;
  }
}