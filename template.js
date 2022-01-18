// import flag from 'country-code-emoji'

const template = (cf) => {
    // const emoji = flag(cf.country) || "👋🏻"
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hello!</title>
        <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
        <style>
          body {
            background: #66ccff;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            font-family: sans-serif;
          }
          div.container {
            background: #fff;
            border-radius: 1rem;
            padding: 4rem;
          }
          a {
            color:inherit;
          }
          footer {
              text-align: center;
              padding-top: 30px
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Hello there! You're connecting from ${cf.city}</h1></br>
          <h2>I'm Norberto Santiago, talking to you from the Twin Cities in MN.</h2>
          <h2>Thanks for taking a look at my first Worker.</h2></br>
          <p>A Worker is a serverless network powered by the Cloudflare, 
          a CDN provider that's deploying this small web app and the one you'll create soon.</br>
          You can check my dev portfolio at <a href="https://www.norbertosantiago.com/" target="_blank" color="inherit">https://www.norbertosantiago.com/.</a> Also powered by <a href="https://www.cloudflare.com/" target="_blank">Cloudflare</a></p>
          <footer><small>© <script>document.write(new Date().getFullYear())</script> | Norberto Santiago</small></footer>
        </div>
      </body>
    </html>
    `
}

export default template