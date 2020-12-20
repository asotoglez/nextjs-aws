const exec = require("child_process").exec;

module.exports = ({ github, context }) => {
  const myShellScript = exec("npx serverless");
  let i = 0;
  myShellScript.stdout.on("data", (data) => {
    console.log(data, i);
    i++;
    return data
  });
  myShellScript.stderr.on("data", (data) => {
    console.error(data);
  });
};
