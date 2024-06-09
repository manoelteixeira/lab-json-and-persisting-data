const colors = require("colors");
const FileHandler = require("./src/fileHandler.js");
const { profileFactory } = require("./src/generate-profile.js");


function main() {
  const args = process.argv.slice(2);
  let value;
  //   Validate Arguments
  if (args.length == 0) {
    console.log(colors.yellow("Using default configurations"));
    value = 1;
  } else if (args.length == 1 && args[0] == "--create") {
    console.log(colors.red("Missing quantity argument"));
    return;
  } else if (args.length == 2 && args[0] == "--create") {
    value = Number(args[1]);
    if (isNaN(value)) {
      console.log(colors.red("Invalid parameter"));
      return;
    }
  }
  //   Run Code
  const fileHandler = new FileHandler();
  const profiles = profileFactory(value);
  fileHandler.append(profiles);
}

main();
