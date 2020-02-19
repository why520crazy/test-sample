const standardVersion = require("standard-version");

// Options are the same as command line, except camelCase
// standardVersion returns a Promise
standardVersion({
  //   noVerify: true,
  infile: "CHANGELOG.md",
  silent: false,
  packageFiles: [
    "package.json",
    "bower.json",
    "manifest.json",
    "composer.json",
    "src/package.json"
  ],
  bumpFiles: [
    {
      filename: "src/MY_VERSION_TRACKER.txt",
      type: "plain-text"
    },
    // {
    //   filename: "src/package.json",
    //   type: "json"
    // },
    // {
    //   filename: "package.json",
    //   type: "json"
    // },
    {
      filename: "src/VERSION_TRACKER.json",
      updater: "./scripts/standard-version-updater.js"
    }
  ],
  header: "# Test Changelog\n\n",
  skip: {
    commit: true,
    tag: true
  }
})
  .then(() => {
    console.error(`standard-version success`);
  })
  .catch(err => {
    console.error(`standard-version failed with message: ${err.message}`);
  });
