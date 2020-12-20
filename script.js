const exec = require("child_process").exec;

module.exports = async ({ github, context }) => {
  const myShellScript = exec("npx serverless");
  let i = 0;
  let res = ''
  await myShellScript.stdout.on("data", (data) => {
    res += data
  });
  myShellScript.stderr.on("data", (data) => {
    console.error(data);
  });
  return res
};
