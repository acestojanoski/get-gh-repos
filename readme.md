# get-gh-repos

> Microservice to get my github repositories using pagination

## URLs

### First page
```
https://get-gh-repos.vercel.app
```
```
https://get-gh-repos.now.sh
```

### With cursor
```
https://get-gh-repos.vercel.app?cursor=xyz
```
```
https://get-gh-repos.now.sh?cursor=xyz
```

## Environment variables

### Required:
* `GITHUB_TOKEN` - Github Personal Access Token
* `GITHUB_USERNAME` - Github username

### Optional:
* `MAX_REPOS` - Max number of repositories to get. Default: `10`
* `ACCESS_ALLOW_ORIGIN` - The url of your website. Default: `*`

## Deployment
```sh
vercel --env GITHUB_TOKEN=xyz --env GITHUB_USERNAME=xyz --env MAX_REPOS=xyz --env ACCESS_ALLOW_ORIGIN=xyz
```
