/*
 +----------------------------------------------------------------------------------------------------------------------------------------------
 * Gulp - template file
 * Create：2017.4
 * Plugin Introduce ：The plug-in is a navigation menu module, search module, combined with the switch animation effects, as well as back to the
 top of the page animation effects as one of the multi-functional sidebar plug-in.
 * Copyright (c) 2017.4  高仓雄（gcx / Spring of broccoli）   In Hangzhou, China
 * Contact ：Wechat（lensgcx）
 +----------------------------------------------------------------------------------------------------------------------------------------------
 */
var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp); //任务按需排序加载（支持异步和同步）
var plugins = require("gulp-load-plugins")({ pattern: '*' }); //让gulp-load-plugins插件能匹配除了gulp插件之外的其他插件

//资源文件路径：
var path = {
    all: '**/*.*',
    htmlAll: "**/*.html",
    cssAll: "**/*.css",
    cssMinAll: "**/*.min.css",
    jsAll: "**/*.js",
    jsMinAll: "**/*.min.js",
    lessAll: "**/*.less",
    sassAll: "**/*.sass",
    scssAll: "**/*.scss",
    pngAll: "**/*.png",
    jsonAll: "**/*.json",
    /* 总目录 */
    Dist: "dist/", //发布根目录
    Src: "src/", //开发根目录
    Bower_components: "bower_components/", //bower库目录
    revDst: "dist/rev/", //rev-json 生成总路径（包含css/js相关rev-json文件）
    /* js */
    jsSrc: "src/app/js/", //开发目录 JS脚本目标路径
    jsDst: "dist/app/js/", //发布目录 JS脚本生成路径
    jsLib: "dist/app/js/lib/", //发布目录 bower提取JS脚本
    revJs: "dist/rev/js", //js  rev-json 保存路径

    /* less/sass/scss */
    lssascSrc: "src/app/css/style/", //Less/Sass/Scss 转译目标路径
    lssascDst: "src/app/css/translation/", //开发目录 转译生成路徑
    /* html */
    htmlSrc: 'src/view/', //html压缩 目标路径
    htmlDst: 'dist/view/', //html压缩 目标生成路径
    /* css */
    cssSrc: "src/app/css/", //css压缩 目标路径
    cssDst: 'dist/app/css/', //css压缩目标生成路径
    cssLib: "dist/app/css/lib/", //发布目录 bower提取css脚本
    revCss: "dist/rev/css/", //css  rev-json 生成路径（全部任务结束后会删除）
    /* img */
    imgSrc: "src/app/img/", //ing压缩，所有目标对象
    imgDst: "dist/app/img/", //img压缩目标路径
    /* sprite */
    imgSpriteSrc: "dist/app/img/plug/sprite", //sprite图生成材料（待合拼的图） 的目标路径
    cssSprite: "src/app/css/sprite/", //sprite 生成css目录
    imgSprite: "src/app/img/sprite/", //sprite 生成图片目录
    imgSpriteDst: "app/img/sprite/", //sprite图（未压缩，sprite原图） 的生成路径
    cssSpriteDst: "app/css/sprite/" //sprite-css样式文件 的生成路径
};
/*--------------------------------------------------------------------------------------------------------------------------------------------*/

//在每次操作gulp前先删除根目录下dist文件夹及其所有内容 和 sprite 生成的 css和png 文件，再进行压缩合并等操作
gulp.task('cleanDist', function() {
    return gulp.src([path.Dist, path.cssSprite, path.imgSprite, path.jsLib, path.cssLib], { read: false }) //read:false，是不读取文件加快程序。
        .pipe(plugins.clean());
});

/* del插件：删除当前文件所在的目录下的文件夹
 不能删除其他盘或其他层级目录下的文件，即不能有../这样的情况 */
//gulp.task( 'clean', function( cb )
//{
//	return plugins.del( [ 'dist/' ], cb );
//} );

/* 从bower库中提取核心到开发目录 */
gulp.task('bower-copy', function() {
    /* copy js */
    gulp.src(path.Bower_components + 'jquery/dist/jquery.js')
        .pipe(gulp.dest(path.jsSrc + 'lib/jquery/'));
    gulp.src(path.Bower_components + 'angular/angular.js')
        .pipe(gulp.dest(path.jsSrc + 'lib/angular/'));
    gulp.src(path.Bower_components + 'bootstrap/dist/js/bootstrap.js')
        .pipe(gulp.dest(path.jsSrc + 'lib/bootstrap/'));
    gulp.src(path.Bower_components + 'weui/dist/example/example.js')
        .pipe(gulp.dest(path.jsSrc + 'lib/weui/'));

    /* copy css */
    gulp.src(path.Bower_components + 'bootstrap/dist/css/bootstrap.css')
        .pipe(gulp.dest(path.cssSrc + 'lib/bootstrap/'));
    gulp.src(path.Bower_components + 'weui/dist/style/weui.css')
        .pipe(gulp.dest(path.cssSrc + 'lib/weui/'));

});

//JS压缩
gulp.task('js', function() {
    return gulp.src([path.jsSrc + path.jsAll, "!" + path.jsSrc + path.jsMinAll])
        .pipe(plugins.uglify({
            ie8: true
        }))
        .pipe(plugins.rename({
            //dirname: "gcx/gcx",                                  //对象js文件父级文件名（路径），大批量不特定压缩js文件，则不建议使用
            //basename: "gcx",                                     //基本名，大批量不特定压缩js文件，则不建议使用
            //prefix: "gcx-",                                      //前缀名
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(plugins.rev()) //给js添加哈希值
        .pipe(gulp.dest(path.jsDst))
        .pipe(plugins.rev.manifest({ merge: true })) //多个文件版本号写在一个rev-manifest.json文件里面
        .pipe(gulp.dest(path.revDst + "js/")); //json 保存路径
});

/* css压缩 */
gulp.task('css', function() {
    return gulp.src([path.cssSrc + path.cssAll, "!" + path.cssSrc + path.cssMinAll]) //要压缩的文件
        .pipe(plugins.minifyCss()) //压缩
        .pipe(plugins.rename({
            suffix: ".min",
            extname: ".css"
        }))
        /*根据静态资源内容，生成md5签名，打包出来的文件名会加上md5签名，同时生成一个json用来保存文件名路径对应关系。
         替换html里静态资源的路径为带有md5值的文件路径，这样html才能找到资源路径*/
        .pipe(plugins.rev())
        .pipe(gulp.dest(path.cssDst)) //压缩后的文件路径
        //添加版本号:并将经过优化和版本控制的文件输出到指定文件夹里。最后再用rev.manifest，将对应的版本号用json表示出来。
        .pipe(plugins.rev.manifest({ merge: true }))
        .pipe(gulp.dest(path.revDst + "css/")); //json 保存路径
});

/* Less转译  css */
/* 确保本地已安装gulp-sourcemaps，生成source map文件,Source map就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应
 的转换前的位置。有了它，出错的时候，出错工具将直接显示原始代码，而不是转换后的代码。这无疑给开发者带来了很大方便
 确保本地已安装gulp-notify [cnpm install gulp-notify --save-dev]                        用于任务提醒 / 处理报错
 确保本地已安装gulp-plumber [cnpm install gulp-plumber --save-dev]                      可以阻止 gulp 插件发生错误导致进程退出并输出错误日志。
 例如：当编译less时出现语法错误或者其他异常，会终止watch事件，通常需要查看命令提示符窗口才能知道，这并不是我们所希望的，所以我们需要处理出现异
 常并不终止watch事件（gulp-plumber），并提示我们出现了错误（gulp-notify）。*/
gulp.task('less', function() {
    gulp.src(path.lssascSrc + path.lessAll)
        .pipe(plugins.plumber({ errorHandler: plugins.notify.onError('Error: <%= error.message %>') }))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.less())
        .pipe(plugins.minifyCss({ compatibility: 'ie7' })) //兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(path.lssascDst));
});

/* sass 转译  css */
gulp.task('sass', function() {
    return gulp.src([path.lssascSrc + path.sassAll, path.lssascSrc + path.scssAll])
        .pipe(plugins.sass.sync().on('error', plugins.sass.logError))
        .pipe(gulp.dest(path.lssascDst));
});

/* 压缩图片任务 */
gulp.task('images', function() {
    return gulp.src(path.imgSrc + path.all)
        .pipe(plugins.imagemin({ //压缩
            progressive: true
        }))
        .pipe(gulp.dest(path.imgDst)); //另存图片
});

/* 制作雪碧图 */
gulp.task('sprite', function() {
    return gulp.src(path.imgSpriteSrc + path.all) //需要合并的图片地址
        .pipe(plugins.spritesmith({ //制作雪碧图
            imgName: path.imgSpriteDst + 'sprite.png', //保存合并后图片的地址
            cssName: path.cssSpriteDst + 'sprite.css', //保存合并后对于css样式的地址
            padding: 5, //合并时两个图片的间距
            algorithm: 'binary-tree', //合并方式，有4种：
            //cssTemplate:"handlebarsInheritance.sass.handlebars",              //是生成css/sass 的模板文件（字符串）
            cssTemplate: function(data) { //是生成css/sass 的模板文件（函数）
                var arr = [];
                data.sprites.forEach(function(sprite) {
                    arr.push(".sprite-" + sprite.name +
                        "{" +
                        "background-image: url('" + sprite.escaped_image + "');" +
                        "background-position: " + sprite.px.offset_x + " " + sprite.px.offset_y + ";" +
                        "width:" + sprite.px.width + ";" +
                        "height:" + sprite.px.height + ";" +
                        "}\n");
                });
                return arr.join("");
            }
        }))
        .pipe(gulp.dest(path.Src));
});

/* 制作完雪碧图后，再把 雪碧图 压缩生成到dist目录 */
gulp.task('spriteMin', function() {
    return gulp.src(path.Src + path.imgSpriteDst + path.all)
        .pipe(plugins.imagemin({ progressive: true }))
        .pipe(gulp.dest(path.Dist + path.imgSpriteDst))
});

/* 合并文件 */
gulp.task('concat', ['sass', 'less', 'css', 'js'], function() {
    //合并路径具有多样性，随机性，根据开发者需求变化而变化，故不单独写出，在concat中作为局部变量使用。
    var cssAllSrc = ['src/app/css/style/plug/**/*.css', 'src/app/css/style/icon/**/*.css', 'src/app/css/sprite/**/*.css'],
        cssAllDst = 'src/app/css/merge/All';
    var jsAllSrc = ['src/app/js/lib/jquery/jquery.js', 'src/app/js/jquery-easing.js', 'src/app/js/jquery-color.js'], //合并顺序按照写入顺序进行
        jsAllDst = 'src/app/js/merge/All';

    /* 将src/app/css/style/icon/下所有压缩css文件,src/app/css/style/plug/下所有压缩css文件和src/app/css/sprite下所有压缩css文件
     合并到 src/app/css/merge/All下，并且命名为all.min.css。*/
    gulp.src(cssAllSrc)
        .pipe(plugins.concat('all.css'))
        .pipe(gulp.dest(cssAllDst));
    // 将 src/app/js/ 下的 jquery-easing.min.js 和 jquery-color.min.js 文件 合并到 src/app/js/merge/All 下，并且命名为 easing.min.js
    gulp.src(jsAllSrc)
        .pipe(plugins.concat('easing.js'))
        .pipe(gulp.dest(jsAllDst));
});

/* 压缩html 任务 */
gulp.task('htmlmin', function() {
    var options = {
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: false, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    };
    return gulp.src(path.htmlSrc + path.htmlAll)
        .pipe(plugins.htmlmin(options))
        //.pipe(plugins.useref({ searchPath: '.tmp' }))
        /* 更改html 引用路径：css/js文件的后缀名 */
        .pipe(plugins.replace('.css"', '.min.css"'))
        .pipe(plugins.replace('.js"', '.min.js"'))
        .pipe(plugins.htmlmin({ collapseWhitespace: true }))

    .pipe(gulp.dest(path.htmlDst))
});

//改变引用路径 rev任务要在生成mainfest之后进行，可以用gulp[]任务依赖来进行流程控
gulp.task('rev', function() {
    gulp.src([path.revDst + path.jsonAll, path.htmlDst + path.htmlAll]) //读取 rev-manifest.json 文件 以及 需要进行名替换的目标文件（html）
        .pipe(plugins.revCollector({ //替换html中的引用路径
            replaceReved: true,
            dirReplacements: {
                //路径替换
                'css': '/dist/css/',
                'js/': '/dist/js/',
                'cdn/': function(manifest_value) {
                    return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
                }
            }
        }))
        .pipe(gulp.dest(path.htmlDst));
    /* 在MD5命名和路径替换之后，删除rev目录 */
    gulp.src(path.revDst, { read: false }) //src的第二个参数的{read:false}，是不读取文件加快程序。
        .pipe(plugins.clean());
});

/* 修改替换html文件中引入路径（若项目开发目录和生成目录的文件结构一样，则不需要替换修改路径 ）*/
//gulp.task( 'replaceUrl', function()
//{
//	gulp.src( path.htmlDst + path.htmlAll )
//		.pipe( plugins.replace( '/src/', '/app/' ) )  			       //替换地址
//		.pipe( plugins.htmlmin( { collapseWhitespace: true } ) )
//		.pipe( gulp.dest( path.htmlDst ) )
//} );

/* 监控项目对象变化时显示的相关信息 */
var t = 0; //计数开始为0
var showinfo = function() {
    t++;
    var curDate = new Date();
    var Year = curDate.getFullYear().toString().slice(-2);
    var Month = ('0' + (curDate.getMonth() + 1)).slice(-2);
    var Day = ('0' + curDate.getDate()).slice(-2);
    var Hours = ("0" + curDate.getHours()).slice(-2);
    var Minutes = ("0" + curDate.getMinutes()).slice(-2);
    return FullDate = '\n' + '           - Author : 高仓雄（gcx / Spring of broccoli，Contact ：Wechat（lensgcx）' + '\n' + '           - Date:' + Year + '-' + Month + '-' + Day + '-' + Hours + '-' + Minutes + '\n' + '           - Current: ' + t + 'st refresh loading... ' + '\n' + '           - running tasks...';
};

/* 使用 Chrome LiveReload Plug-in 和 tiny-lr 实现自动刷新页面 */
//gulp.task( 'watch', function()									/* Rerun the task when a file changes */
//{
//	//在浏览器中访问 http://localhost:35729/，正常情况下，你会在浏览器上看到类似于下面的 JSON 响应：{"tinylr":"Welcome","version":"1.0.4"}
//	var port = 35729;
//	plugins.tinyLr().listen( port, function( err )    												 //livereload
//	{
//		if( err )
//		{
//			return console.log( err )
//		}
//		gulp.watch( [ path.Src + path.all, path.htmlSrc + path.htmlAll ], function( event )    //监听启动时，控制台打印监听变化对象的出相关信息
//		{
//			console.log( 'File ' + event.path + ' was ' + event.type + showinfo() + '' );
//		} );
//		//gulp.watch(.......);
//	} );
//} );

/* 使用webserver 自动刷新页面 */
//gulp.task( 'webserver', function()
//{
//	gulp.src( './' ) 								// 服务器目录（./代表根目录）
//		.pipe( plugins.webserver( { 						// 运行gulp-webserver
//			livereload: true, 						// 启用LiveReload
//			directoryListing: true,						//是否显示目录列表
//			open: true 							// 服务器启动时自动打开网页
//		} ) );
//} );

/* gulp监听 Rerun the task when a file changes */
gulp.task('watch', function() {
    //reload 监听
    plugins.livereload.listen();
    gulp.watch(['src/**/*.*', 'index.html'], function(file) {
        plugins.livereload.changed(file.path); //自动刷新页面
    });
    gulp.watch([path.Src + path.all, path.htmlSrc + path.htmlAll, 'index.html'], function(event) {
        console.log('File ' + event.path + ' was ' + event.type + showinfo() + ''); //监听启动时，控制台打印监听变化对象的出相关信息
    });
    //监听对象，在目标发生变化时，启动任务 work-xxxx
    gulp.watch([path.lssascSrc + path.sassAll, path.lssascSrc + path.scssAll], ['work-sass']);
    gulp.watch([path.lssascSrc + path.lessAll], ['work-less']);
    gulp.watch([path.cssSrc + path.cssAll, "!" + path.cssSrc + path.cssMinAll], ['work-css']);
    gulp.watch([path.jsSrc + path.jsAll, "!" + path.jsSrc + path.jsMinAll], ['work-js']);
    gulp.watch([path.htmlSrc + path.htmlAll], ['work-html']);
    gulp.watch(['src/app/fonts/**/*.*', 'src/app/info/**/*.*'], ['work-copy']);
});

/* 定义任务名及其触发任务
 如：定义任务work-sass，既在任务 work-sass 触发时启动任务 sass */
gulp.task('work-sass', gulpsync.sync(['sass']));
gulp.task('work-less', gulpsync.sync(['less']));
gulp.task('work-css', gulpsync.sync(['css']));
gulp.task('work-js', gulpsync.sync(['js']));
gulp.task('work-html', gulpsync.sync(['htmlmin', 'rev']));
gulp.task('work-copy', gulpsync.sync(['copy']));

// 拷贝
gulp.task('copy', function() {
    gulp.src('src/app/fonts/**/*.*')
        .pipe(gulp.dest('dist/app/fonts/'));
    gulp.src('src/app/info/**/*.*')
        .pipe(gulp.dest('dist/app/info/'));
});

/* 打包生成发布项目文件 */
//定义图片操作任务（images, sprite, spriteMin），将图片压缩后，生成雪碧图，再压缩雪碧图到生成目录
gulp.task('img-handle', gulpsync.sync(['images', 'sprite', 'spriteMin']));
//定义常规任务（在图片操作任务之后，进行常规任务（sass, less, css, js），并进行合并）
gulp.task('normal', gulpsync.sync(['img-handle', 'bower-copy', 'concat', ['sass', 'less', 'css', 'js']]));
//定义替换链接任务collector （ 再完成常规任务的前提下：先在所有html文件中替换css/js的后缀名，再进行rev操作替换html模板中的链接）
gulp.task('collector', gulpsync.sync(['normal', 'htmlmin', 'rev']));
//使用 gulp.task('default') 定义自动化任务默认执行入口,在命令行使用 gulp 启动所有任务，先清除目标生成文件，完成一系列操作后，再启动监听。
gulp.task('default', gulpsync.sync(['cleanDist', 'collector', 'copy', 'watch']));

/* 使用gulp-sequence来顺序异步加载任务列表 */
//var gulpSequence = require( 'gulp-sequence' );
//gulp.task( 'default', [ 'clean' ], function( cb )
//{
//	gulpSequence( 'cleanDist', [ 'images', 'sprite', 'spriteMin' ], [ 'sass', 'less', 'css', 'js' ], 'concat', 'htmlmin', 'replaceSuffix', 'rev', 'replaceUrl', 'cleanRev', 'watch' )( cb );
//} );