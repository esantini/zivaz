import * as express from 'express';
import * as path from 'path';
import { galleries } from "./constants";

const compress = require("compression");
const minify = require("express-minify-html");

var app = express();
app.use(compress());
app.use(minify({
    override:      true,
    exception_url: false,
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        removeEmptyAttributes:     true
    }
}));

// Get port from environment and store in Express.
var port = normalizePort(process.env.PORT || '4000');
app.set('port', port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// // uncomment after placing your favicon in /public
// import * as favicon from 'serve-favicon';
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/$', function(req: express.Request, res: express.Response, next: express.NextFunction) {
	console.log("\nServing: home");
	res.render('index', { page: "home" });
});

app.use('/menu$', function(req: express.Request, res: express.Response, next: express.NextFunction) {
	console.log("\nServing: menu");
	res.render('index', { page: "menu" });
});

app.use('/aboutus$', function(req: express.Request, res: express.Response, next: express.NextFunction) {
	console.log("\nServing: aboutus");
	res.render('index', { page: "aboutus" });
});

app.use('/catering$', function(req: express.Request, res: express.Response, next: express.NextFunction) {
	console.log("\nServing: catering");
	res.render('index', { page: "catering" });
});

app.use("/imgGallery", function(req: express.Request, res: express.Response, next: express.NextFunction) {
	console.log("\nServing: imgGallery");
	res.render("imgGallery", { imgs: galleries[req.query.dir], dir: req.query.dir });
});

interface myError extends Error {
	status?: any;
}
// catch 404 and forward to error handler
app.use(function(req: any, res: any, next: any) {
	var err:myError = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err: myError, req:express.Request, res:express.Response, next: express.NextFunction) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	console.log("Bitacaro!!", new Date(), err);

	// render the error page
	res.status(err.status || 500);
	res.render('error', { page: "error", error: err.message });
});

app.listen(port);
console.log("\nListening on port: " + port);

// import * as httpLib from 'http';
// /**
//  * Create HTTP server.
//  */
// var server = httpLib.createServer(app);

// server.listen(port, function() {
// 	console.log('Express server listening on port ' + port);
// });
// server.on('error', onError);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: any) {
	var port = parseInt(val, 10);
	if (isNaN(port)) {
		// named pipe
		return val;
	}
	if (port >= 0) {
		// port number
		return port;
	}
	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error: any) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

export = app;
