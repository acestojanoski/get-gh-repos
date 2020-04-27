# get-gh-repos

> Microservice to get my github repositories using pagination

## Endpoint

```
https://get-gh-repos.now.sh?cursor=YOUR_CURSOR_OR_SKIP
```

## Environment variables
* `GITHUB_TOKEN` - Github Personal Access Token
* `GITHUB_USERNAME` - Github username
* `MAX_REPOS` - Max number of repositories to get
* `ACCESS_ALLOW_ORIGIN` - The url of your website
