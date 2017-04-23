var path = require('path');
var fs = require('fs-extra');

module.exports = function (plop) {
    var dest  =  plop.getPlopfilePath().includes('node_modules') ? '../../' : './'

    // controller generator
    plop.setGenerator('install', {
        description: 'Installing scffld-bs files into root of your project',
        prompts: [],
        actions: [{
            type: 'add',
            path: './' + path.join(dest, 'package.json'),
            templateFile: __dirname + '/package.json',
            abortOnFail: false
        },
        function moveSourceFilesToRoot(answers) {
            fs.copy(__dirname + '/src', path.join(dest, 'src'), function (err) {
                if (err) return console.error(err);
            });

            return "Copied scffld-bs source files to root.";
        }]
    });
};
