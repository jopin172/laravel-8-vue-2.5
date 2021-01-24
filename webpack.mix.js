const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/sistema/js')
    .vue().version()
    .sass('resources/sass/app.scss', 'public/sistema/css');

// if (mix.inProduction()) {
//     mix.version();
// }

mix.browserSync('www.laravel-vue.test/sistema/');
mix.browserSync({
    proxy: 'www.laravel-vue.test/sistema/'
});

mix.disableNotifications();
