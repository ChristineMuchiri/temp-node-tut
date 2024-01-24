const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log('request event')

    fs.readFile('./content/index.html', 'utf-8', (err, indexHtml) => {
        if (err) {
            console.log(err)
            return
        }

        fs.readFile('./content/script.js', 'utf-8', (err, scriptJs) => {
            if (err) {
                console.log(err)
                return
            }

            fs.readFile('./content/style.css', 'utf-8', (err, styleCss) => {
                if (err) {
                    console.log(err)
                    return
                }
                const combinedHtml = indexHtml.replace('</body>', `<script>${scriptJs}</script></body>`)
                const finalHtml = combinedHtml.replace('</head>', `<style>${styleCss}}</style></head>`)

                res.end(finalHtml)
            })
        })
    })
    
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000....')
}) 