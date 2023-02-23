const React = require('react')

function Def(html) {
	return (
		<html>
			<head>
				<title>Title</title>
				<link rel="stylesheet" href="/css/style.css" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
			</head>
			<body>
			<div id="wrapper">
               <div className="main-content">{html.children}</div>
               <footer className="footer"><a href="https://www.linkedin.com/in/kristen-von-gerichten-80aba6233" target="blank" rel="noopener noreferrer">Connect with me on LinkedIn</a></footer>
				{/* {html.children} */}
			</div>	
			</body>
		</html>
	)
}

module.exports = Def