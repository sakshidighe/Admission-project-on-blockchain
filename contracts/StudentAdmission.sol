// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract StudentAdmission {
    struct Student {
        string name;
        int age; 
        string class;
        uint timestamps;
        address walletAddress; 
    }
    Student[] public students;
    address payable public owner;

    // Event to log student admissions
    //event StudentAdmitted(address indexed studentWallet, string name);

    constructor() {
        owner = payable(msg.sender);
    }

    function apply1(string calldata _name, int _age, string calldata _class) external  payable {
        require(msg.value > 0, "Insufficient admission fee provided.");
        owner.transfer(msg.value);
        students.push(Student({
            name: _name,
            age: _age,
            class: _class,
            walletAddress: payable(msg.sender),
            timestamps:block.timestamp
        }));

        // Emit event to log student admis
    }

    function getStudents() public view returns (Student[] memory){
            return students;
    }

   
}