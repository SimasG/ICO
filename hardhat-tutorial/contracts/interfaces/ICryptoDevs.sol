// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ICryptoDevs {
    /**
     * @dev Returns a token ID owned by `owner` at a given `index` of its token list.
     * Use along with {balanceOf} to enumerate all of ``owner``'s tokens.
     */
    // This func comes from `ERC721Enumerable` contract imported in `CryptoDevs` (NFT) contract
    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId);

    // ** How do I know if this func comes from th `ERC721Enumable` or `ERC20` contract?
    // ** ERC721: "function balanceOf(address owner) public view virtual override returns (uint256) {}"
    // ** ERC20: "function balanceOf(address account) public view virtual override returns (uint256) {}"
    function balanceOf(address owner) external view returns (uint256 balance);
}
