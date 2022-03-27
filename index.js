const { ArgumentParser } = require('argparse');

const { create: createHTML5 } = require('./templates/simpleHTML5');
const { Templates } = require('./constants');
const { version } = require('./package.json');

const parser = new ArgumentParser({
  description: 'Argparse example',
  add_help: true,
});

parser.add_argument('-v', '--version', { action: 'version', version });
parser.add_argument('--template', {
  help: 'creates template',
});

const args = parser.parse_args();

(function bootstrap(templateType) {
  if (!templateType) {
    console.log('Please provide template');
    console.log(Object.values(Templates));
    throw new Error('Template is missing');
  }

  createTemplate(templateType);
})(args.template);

function createTemplate(templateType) {
  switch (templateType) {
    case Templates.HTML5:
      createHTML5();
      break;
    default:
      console.log(`${templateType} is not supported`);
      break;
  }
}
