# Serverless Blog

This is an example of a Blog made in serverless with an index page with the list of the posts, a post page a not found page and an about page.

## Development

To run it locally just run

```sh
npm i
npm run dev-server
```

That's it :v

## Development with SAM (TODO)

To run it locally with SAM (The AWS Tool to create and test serverless)

[Install SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

```sh
sam build
sam local start-api
curl http://localhost:3000
```

Sam doesn't rebuild image on changes so we can do

```sh
npm i -g nodemon
nodemon --exec sam build
```

## Linting

**Please** configure your Editor to use Eslint and Prettier.

Install Visual Studio Extension `lit-html` for html in js linting.

## Template Engine

We use Template Literals for everything since we don't render any dangerous data, this is very usefull when in a lambda for speed purposes, no loading of template engine + parsing, evaluating and compiling and new template language, we have js ;).

## Paths and Regex

If you don't want to try to read those confusing regexes to create paths you should check the `src/tools/generate-regexp-paths.js` script, just edit it, run it, copy and paste.

## FAQ

__Website is not updated with my changes when using dev-server__\
Go to the terminal and type `rs` + `Enter`

__Where is Bootstrap__
Nowhere, css has a very good grid system already included, and if we use bootstrap we need to make a compromise to use boostrap compatible styles which is never the case because of Designers and we will end up overwritting more styles than what we use, so ... nope.
