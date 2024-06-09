const { writeFileSync, readFileSync, existsSync } = require("node:fs");
const colors = require("colors");

class FileHandler {
  constructor(path, fileName) {
    this._path = path || "./data";
    this._fileName = fileName || "data.json";
    if (!existsSync(this._path)) {
      throw new Error(colors.red(`${this._path} not found`));
    }
    this.file = `${this._path}/${this._fileName}`;
    if (!existsSync(this.file)) {
      console.log(
        colors.red(`${this._fileName} Not Found.\n`),
        colors.yellow(`Creating ${this._fileName} at ${this._path}`)
      );
      writeFileSync(this.file, "");
    }
  }

  save(data) {
    data = JSON.stringify(data, 0, 2);
    return writeFileSync(this.file, data, { encoding: "utf-8" });
  }

  load() {
    let data = readFileSync(this.file, "utf8");
    return data ? JSON.parse(data) : [];
  }

  append(data) {
    const originalData = this.load();
    this.save(originalData.concat(data));
  }
}

module.exports = FileHandler;
