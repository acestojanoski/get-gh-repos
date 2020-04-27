const got = require('got');

const {GITHUB_TOKEN, GITHUB_USERNAME, MAX_REPOS} = process.env;

const API_URL = 'https://api.github.com/graphql';

const query = `
    query ($cursor: String) {
        user(login: "${GITHUB_USERNAME}") {
            repositories(
                first: ${MAX_REPOS || 5},
                isFork: false,
                isLocked: false,
                ownerAffiliations: OWNER,
                privacy: PUBLIC,
                orderBy: {
	    			field: CREATED_AT,
	    			direction: DESC
                },
                after: $cursor
            ) {
                edges {
                    cursor
                    node {
                        name
                        description
                        url
                        primaryLanguage {
	    					name
	    					color
                        }
                    }
                }
                pageInfo {
                    hasNextPage
                }
            }
        }
    }
`;

module.exports.getRepos = async (cursor) => {
	const options = {
		method: 'post',
		body: JSON.stringify({
			query,
			variables: {
				cursor,
			},
		}),
		responseType: 'json',
		headers: {
			authorization: `bearer ${GITHUB_TOKEN}`,
		},
	};

	const {body} = await got(API_URL, options);
	return body.data.user.repositories;
};
