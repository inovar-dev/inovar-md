import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel'
export default{
    input: 'lib/converter.js',
    output: {
		format: 'iife',
		dir: 'src',
        sourcemap: true,
        name: "Converter"
	},
    plugins: [
        resolve(), 
        commonjs(),
        terser(),
        babel({ babelHelpers: 'bundled' }),
    ],
    
}