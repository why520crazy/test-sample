const standardVersion = require("standard-version");

// Options are the same as command line, except camelCase
// standardVersion returns a Promise
standardVersion({
  //   noVerify: true,
  infile: "CHANGELOG.md",
  silent: false,
  //   bumpFiles: [],
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
