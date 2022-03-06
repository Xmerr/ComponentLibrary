const path = require('path');

module.exports = {
    apps: [
        {
            name: 'library',
            args: 'run storybook',
            cwd: path.join(__dirname, '..'),
            namespace: 'cl',
            script: 'yarn',
        },
    ],
};
