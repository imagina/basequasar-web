// Configuration for your app
var webpack = require('webpack')
var path = require('path')
//const util = require('util')
const nodeExternals = require('webpack-node-externals')
// Get our env variables
const envparser = require('./env/envparser')

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: [
      'i18n',
      'vuelidate',
      'axios',
      {path: 'vueCarousel', server: false }
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons', // optional, you are not bound to it
      'fontawesome'
      // 'ionicons',
      // 'mdi',
    ],
    supportIE: false,
    build: {
      scopeHoisting: true,
      env: envparser(),
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
        // Make our helper function Global, for example to use it in js files you should call it env('MY_VALUE')
        cfg.plugins.push(
          new webpack.ProvidePlugin({
            env: [path.resolve(__dirname, 'env/env'),'default']
          })
        )

        /*Alias*/
        cfg.resolve.alias = {
          ...cfg.resolve.alias, // This adds the existing alias

          // Add your own alias like this
          //myalias: path.resolve(__dirname, './src/somefolder'),
        }


        /*
        cfg.module.rules.push({
          test: /\.(js)$/,
          loader: 'babel-loader',
          exclude: ['quasar']
        })
        */

        //console.log(util.inspect(cfg, false, 5, true /* enable colors */))
      },
      chainWebpack (chain, { isServer, isClient }) {
        if (isServer) {
          chain.externals(nodeExternals({
            // do not externalize CSS files in case we need to import it from a dep
            whitelist: /(\.css$|\.vue$|\?vue&type=style|@imagina|quasar-framework[\\/])/
          }))
        }
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },
    framework: 'all',
    /*framework: {
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemSide'
      ],
      directives: [
        'Ripple'
      ],
      // Quasar plugins
      plugins: [
        'Notify'
      ]
      // iconSet: ctx.theme.mat ? 'material-icons' : 'ionicons'
      // i18n: 'de' // Quasar language
    },*/
    // animations: 'all' --- includes all animations
    animations: [],
    ssr: {
      pwa: false
    },
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack (cfg) {
        // do something with Electron process Webpack cfg
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },
      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
