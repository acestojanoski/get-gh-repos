const repository = require('./repository');

module.exports = async (req, res) => {
	res.setHeader(
		'access-control-allow-origin',
		process.env.ACCESS_ALLOW_ORIGIN || '*'
	);

	res.setHeader('content-type', 'application/json');

	try {
		const githubResponse = await repository.getReposAfterCursor(
			req.query.cursor
		);

		console.info(
			'Github API response: ',
			JSON.stringify(githubResponse, null, '\t')
		);

		if (
			githubResponse &&
			githubResponse.data &&
			githubResponse.data.user &&
			githubResponse.data.user.repositories
		) {
			const repositories = githubResponse.data.user.repositories;

			const mappedResponse = {
				repositories: [],
				pageInfo: repositories.pageInfo || {},
			};

			mappedResponse.repositories =
				repositories.edges &&
				repositories.edges.map((item) => ({
					...item.node,
					cursor: item.cursor,
				}));

			console.info(
				'Response: ',
				JSON.stringify(mappedResponse, null, '\t')
			);

			return res.end(JSON.stringify(mappedResponse));
		}

		res.statusCode = 404;
		res.end(JSON.stringify({message: 'Not found'}));
	} catch (error) {
		console.error('Error: ', error);
		res.statusCode = 500;
		res.end(JSON.stringify({message: 'Internal server error'}));
	}
};
