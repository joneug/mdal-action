const core = require('@actions/core');
const exec = require('@actions/exec');

const image = 'joneug/mdal';

async function run() {
  try {
    let modelFile = core.getInput('model-file')
    
    await exec.exec('docker', ['pull', '-q', image], {});

    if (process.platform.toLowerCase() === 'win32') {
      await exec.exec('docker', ['run', '--rm', '-v', `${process.cwd()}:C:/project`, image, modelFile], {});
    } else {
      await exec.exec('docker', ['run', '--rm', '-v', `${process.cwd()}:/project`, image, modelFile], {});
    }

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
