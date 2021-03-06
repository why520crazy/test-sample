module.exports = {
  bumpFiles: [
    {
      filename: "src/MY_VERSION_TRACKER.txt",
      type: "plain-text"
    },
    {
      filename: "src/package.json",
      type: "json"
    },
    {
      filename: "package.json",
      type: "json"
    },
    {
      filename: "src/VERSION_TRACKER.json",
      updater: "./scripts/standard-version-updater.js"
    }
  ],
  preset: "angular"
};
