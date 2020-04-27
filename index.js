const repository = require('./repository');

module.exports = async (req, res) => {
	res.setHeader(
		'access-control-allow-origin',
		process.env.ACCESS_ALLOW_ORIGIN || '*'
	);

	try {
		const response = await repository.getRepos(req.query.cursor);

		const repositories = response.edges.map((item) => ({
			...item.node,
			cursor: item.cursor,
		}));

		const preparedResponse = {
			repositories,
			pageInfo: response.pageInfo,
		};

		res.setHeader('content-type', 'application/json');
		res.end(JSON.stringify(preparedResponse));
	} catch (error) {
		console.error(error);

		res.statusCode = 500;
		res.setHeader('content-type', 'application/json');
		res.end(JSON.stringify({message: 'Internal server error'}));
	}
};
