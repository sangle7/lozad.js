import path from 'path'
import serve from 'rollup-plugin-serve'
import babel from 'rollup-plugin-babel'
import livereload from 'rollup-plugin-livereload'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs';


export default {
  input: 'demo/index.js',
  output: {
    file: 'demo/bundle.js',
    format: 'cjs'
  },
  plugins: [
    postcss({
      extensions: ['.css'],
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      babelrc: false,
      presets: [
        [
          'env',
          {
            modules: false
          }
        ],
        'stage-0'
      ]
    }),
    serve('demo', {
      open: true,
      historyApiFallback: true,
    }),
    livereload('demo'),
  ],
}