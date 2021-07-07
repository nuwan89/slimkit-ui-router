import { terser } from 'rollup-plugin-terser';

export default {
	input: './index.js',
	output: [{
        dir: './dist/',
        format: 'es',
        name: "slimkit-router",
        plugins: [terser()]
    }]
}