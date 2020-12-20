const util = require('util');
const exec = util.promisify(require('child_process').exec);
module.exports = async ({ github, context }) => {
  try {
    const { stdout, stderr } = await exec('npx serverless');
    const urlRegex = /(https?:\/\/[^ ]*)/;
    return input.match(urlRegex)[1]
}catch (err) {
   console.error(err);
};
};
