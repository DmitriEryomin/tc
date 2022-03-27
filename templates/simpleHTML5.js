const fs = require('fs');

const htmlTemplate = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <script lang="javascript" src="./main.js"></script>
    </body>
  </html>
`;

const javascriptTemplate = `
  (function () {
    const message = 'Hello world!';

    console.log(message);
  })();
`;

const cssTemplate = `
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const HTML5Template = [
  {
    name: 'index.html',
    data: htmlTemplate,
  },
  {
    name: 'main.js',
    data: javascriptTemplate,
  },
  {
    name: 'styles.css',
    data: cssTemplate,
  },
];

function create() {
  HTML5Template.forEach(({ name, data }) => {
    fs.appendFileSync(name, data);
  });
}

module.exports = {
  create,
};
