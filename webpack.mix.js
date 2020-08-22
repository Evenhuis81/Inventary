const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    // .sass('resources/sass/app.scss', 'public/css')
    .browserSync({
        host: "inventary.local",
        port: 3000,
        proxy: "http://localhost:8000"
    })
    .sourceMaps();
