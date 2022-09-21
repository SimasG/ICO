// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ICryptoDevs {
    /**
     * @dev Returns a token ID owned by `owner` at a given `index` of its token list.
     * Use along with {balanceOf} to enumerate all of ``owner``'s tokens.
     */
    // These funcs are coming from `ERC721Enumerable` contract imported in `CryptoDevs` contract
    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId);

    // ** Don't we also have a `balanceOf` func from `ERC20` Contract?
    function balanceOf(address owner) external view returns (uint256 balance);
}
