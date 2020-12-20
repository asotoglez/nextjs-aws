const { exec } = require("child_process");

module.exports = ({ github, context }) => {
  exec("npx serverless", (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err);
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  });
  return context;
};
