# gatsby-remark-embed-matterport
Embed a Matterport or MPEmbed showcase in your Markdown

Inspired by [gatsby-remark-embed-youtube](https://github.com/ntwcklng/gatsby-remark-embed-youtube)

## Install 
1. Install plugin to your site:

```bash
yarn add gatsby-remark-embed-matterport
```

2. Add following to your `gatsby-config.js`:
```js
    plugins: [      
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
          {
            resolve: "gatsby-remark-embed-matterport",
            options: {
              width: 800,
              height: 400
            }
          }
          ]
        }
      },
```

Note: if you also rely on `gatsby-remark-responsive-iframe`, you have to define the embed-youtube plugin first:
``` js
plugins: [
  "gatsby-remark-embed-matterport",
  "gatsby-remark-responsive-iframe"
]
```

3. Restart gastby.

## Usage

```markdown
# Look at this Showcase:

`matterport:https://my.matterport.com/show/?m=SpggAca2PAh`

```


## License

MIT