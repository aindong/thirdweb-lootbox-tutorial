import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = "0x7A21ee2d1A27676765d0dED9c9B8c57f65563f66";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log("Creating NFT batch...");

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: "Pikachu",
        description: "A Pikachu",
        image: "https://img.pokemondb.net/artwork/large/pikachu.jpg",
        properties: {
          rarity: "a bit rare",
          fanciness: 7,
        },
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Bulbasaur",
        description: "A Bulbasaur",
        image: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
        properties: {
          rarity: "a bit rare",
          fanciness: 7,
        },
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Charmander",
        description: "A Charmander",
        image: "https://img.pokemondb.net/artwork/large/charmander.jpg",
        properties: {
          rarity: "super rare!",
          fanciness: 10,
        },
      },
      supply: 10,
    },
    {
      metadata: {
        name: "Squirtle",
        description: "A Squirtle",
        image: "https://img.pokemondb.net/artwork/large/squirtle.jpg",
        properties: {
          rarity: "super rare!",
          fanciness: 10,
        },
      },
      supply: 10,
    },
  ]);

  console.log("NFTs created!");
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
