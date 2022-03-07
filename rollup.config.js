import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import alias from '@rollup/plugin-alias';
const aliases = require('./config/aliases');

const aliasList = Object.keys(aliases).map(find => ({
    find,
    replacement: aliases[find],
}));

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
            },
        ],
        plugins: [
            alias({
                entries: aliasList,
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            commonjs({
                include: 'node_modules/**',
            }),
            external(),
            postcss({
                minimize: true,
                modules: true,
                plugins: [],
                use: ['sass'],
            }),
            resolve({
                extensions: ['.mjs', '.js', '.json', '.jsx'],
                mainFields: ['browser', 'module', 'main', 'jsnext:main'],
            }),
        ],
    },
];
