const core = require('@actions/core');
const exec = require('@actions/exec');

const image = 'joneug/mdal';

async function run() {
  try {
    let modelFile = core.getInput('model-file')

    if (process.platform.toLowerCase() === 'win32') {
      await exec.exec('docker', ['pull', image, '-q', '>', '$null'], {});
      await exec.exec('docker', ['run', '--rm', '-v', `${__dirname}:C:/project`, image, modelFile], {});
    } else {
      await exec.exec('docker', ['pull', image, '-q', '>', '/dev/null'], {});
      await exec.exec('docker', ['run', '--rm', '-v', `${__dirname}:/project`, image, modelFile], {});
    }

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
