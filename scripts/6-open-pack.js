import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = "0xFb6Ef582D970Ff0DE05C48D91Ca5012313c9db1E";
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Opening the pack...");
  const opened = await packModule.open("0");
  console.log("Opened the pack!");
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}
