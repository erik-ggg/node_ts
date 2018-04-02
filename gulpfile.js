var gulp = require("gulp");
var ts = require("gulp-typescript");
// var exec = require("child_process").exec()
var nodemon = require("gulp-nodemon")
var tsProject = ts.createProject("tsconfig.json");

gulp.task('default', ['compile', "server"])

gulp.task("compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('server', function (cb) {
    nodemon({
        "watch": ["src"],
        "ext": "ts",
        "ignore": ["src/**/*.spec.ts"],
        "exec": "ts-node ./src/server.ts"
        // the script to run the app
        //     script: 'src/server.ts',
        // this listens to changes in any of these files/routes and restarts the application
        // watch: ["server.js", "app.js", "routes/", 'public/*', 'public/*/**'],
        //     ext: 'js'
        // Below i'm using es6 arrow functions but you can remove the arrow and have it a normal .on('restart', function() { // then place your stuff in here }
        // }).on('restart', () => {
        //     gulp.src('server.ts')
        // I've added notify, which displays a message on restart. Was more for me to test so you can remove this
        //         .pipe(notify('Running the start tasks and stuff'));
        // });
        // exec('node lib/server.ts', function (err, stdout, stderr) {
        //   console.log(stdout);
        //   console.log(stderr);
        //   cb(err);
        // });
    })
})