const util = require('util');
const exec = util.promisify(require('child_process').exec);
module.exports = async ({ github, context }) => {
  try {
    const { stdout, stderr } = await exec('npx serverless');
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
    return stdout
}catch (err) {
   console.error(err);
};
};
