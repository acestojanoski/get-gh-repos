# get-gh-repos

> Microservice to get my github repositories using pagination

## Endpoint

```
https://get-gh-repos.now.sh?cursor=YOUR_CURSOR_OR_SKIP
```

## Environment variables

### Required:
* `GITHUB_TOKEN` - Github Personal Access Token
* `GITHUB_USERNAME` - Github username

### Optional:
* `MAX_REPOS` - Max number of repositories to get. Default: `5`
* `ACCESS_ALLOW_ORIGIN` - The url of your website. Default: `*`
