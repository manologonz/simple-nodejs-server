const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.write('<html>');
        res.write('<head><title>Assignmet 1</title></head>');
        res.write('<body>');
        res.write('<h1>This is my first Node.js server :3.</h1>');
        res.write('<a href="/users">Users</a>');
        res.write('<p><strong>Create a user.</strong></p>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="username"/><button type="submit">Print to console</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === "/users") {
        res.setHeader("Content-Type", "text/html");
        res.write('<html>');
        res.write('<head><title>Assignmet 1</title></head>');
        res.write('<body>');
        res.write('<h1>Random hardcoded usernames :D</h1>');
        res.write('<ul><li>robocopter</li><li>mclovin</li><li>r2d2</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === "/create-user" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
};

exports.handler = requestHandler;
