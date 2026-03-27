// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PredictionMarket {

    struct Market {
        string question;
        uint yesVotes;
        uint noVotes;
        bool resolved;
    }

    Market[] public markets;

    function createMarket(string memory _question) public {
        markets.push(Market(_question, 0, 0, false));
    }

    function vote(uint marketId, bool choice) public {
        if (choice) {
            markets[marketId].yesVotes++;
        } else {
            markets[marketId].noVotes++;
        }
    }

    function getMarket(uint id) public view returns (Market memory) {
        return markets[id];
    }
}
