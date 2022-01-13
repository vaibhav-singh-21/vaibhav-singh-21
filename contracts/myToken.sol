pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract myToken is ERC721 {
    uint256 private totalSupply;

    mapping(uint256 => string) private tokenIdToTokenURI;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        totalSupply = 0;
    }

    function getTotalSupply() public view returns (uint256) {
        return totalSupply;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "https://ipfs.io/ipfs/QmXGXpc7vhmFhsiunkkHLxf4s5zgSVz64pfxyGEdJC7LVt?filename=metadata.json";
    }

    function mint() public returns (address) {
        uint256 _tokenId = getTotalSupply() + 1;
        _mint(msg.sender, _tokenId);
        totalSupply += 1;
        string memory _tokenURI = tokenURI(_tokenId);
        tokenIdToTokenURI[_tokenId] = _tokenURI;
        return msg.sender;
    }

}