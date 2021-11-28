import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named'
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named'
        }
    ],
    plugins: [
        json(),
        typescript({ tsconfig: './tsconfig.json' })
    ],
    external: [
        '@arcgis/core',
        '@types/three',
        'three',
        '@arcgis/core/views/3d/externalRenderers'
    ]
};