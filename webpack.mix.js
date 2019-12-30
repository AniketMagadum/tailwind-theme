const mix = require("laravel-mix");
require("laravel-mix-purgecss");

//Segragate vendor for caching benefits
mix.extract(["jquery"]);


mix.js("assets/src/js/app.js", "assets/dist/js")
    .postCss("assets/src/css/app.css", "assets/dist/css", [
        require("tailwindcss")
    ])
    .purgeCss({
        folders: ["layouts", "pages", "partials"],
        extensions: ["htm"]
    })
    .setPublicPath("assets/dist");

//Enter the url of your website for auto reload
mix.browserSync("octobercms.test");
