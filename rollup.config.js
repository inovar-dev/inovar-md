import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel'
export default{
    input: 'lib/inovar-md.js',
    output: {
		format: 'iife',
		dir: 'src',
        sourcemap: true,
        name: "InovarMd"
	},
    plugins: [
        resolve(), 
        commonjs(),
        terser(),
        babel({ babelHelpers: 'bundled' }),
    ],
    
}