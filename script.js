const { exec } = require("child_process");

module.exports = ({ github, context }) => {
  const { execSync } = require('child_process');
  // stderr is sent to stdout of parent process
  // you can set options.stdio if you want it to go elsewhere
  const stdout = execSync('npx serverless');
  const { spawnSync} = require('child_process');
  const child = spawnSync('ls', );
  console.error('error', child.error);
  console.log('stdout ', child.stdout);
  console.error('stderr ', child.stderr);
  return child.stdout
  // exec("npx serverless", (err, stdout, stderr) => {
  //   if (err) {
  //     //some err occurred
  //     console.error(err);
  //   } else {
  //     // the *entire* stdout and stderr (buffered)
  //     console.log(`stdout: ${stdout}`);
  //     console.log(`stderr: ${stderr}`);
  //     return stdout
  //   }
  // });
};
