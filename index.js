const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    let modelFile = core.getInput('model-file')

    if (process.platform.toLowerCase() === 'win32') {
      await exec.exec('docker', ['run', '--rm', '-v', `${__dirname}:C:/project`, 'joneug/mdal', modelFile], {});
    } else {
      await exec.exec('docker', ['run', '--rm', '-v', `${__dirname}:/project`, 'joneug/mdal', modelFile], {});
    }

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
