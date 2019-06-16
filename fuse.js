const { FuseBox, QuantumPlugin, EnvPlugin, CopyPlugin } = require('fuse-box');

const production = process.env.NODE_ENV === 'dev' ? false : true;

const getConfig = (target, name) => {
  return {
    homeDir: 'src/',
    cache: !production,
    target,
    output: `build/$name.js`,
    useTypescriptCompiler: true,
    plugins: [
      EnvPlugin({ NODE_ENV: production ? 'production' : 'development' }),
      production &&
        QuantumPlugin({
          bakeApiIntoBundle: name,
          treeshake: true,
          removeExportsInterop: false,
          uglify: {
            es6: true,
          },
        }),
    ],
    alias: {
      '~': '~/',
    },
    log: {
      showBundledFiles: false,
    },
  };
};

const cfg = Object.assign({}, getConfig('browser@es5', 'index'), {
  sourceMaps: !production,
});

cfg.plugins.push(
  CopyPlugin({
    files: ['*.svg'],
    dest: 'assets',
    resolve: production ? './assets' : '/assets',
  }),
);

const fuse = FuseBox.init(cfg);
const app = fuse.bundle('index').instructions(`> [index.ts]`);

if (!production) {
  app.watch();
}

fuse.run();
