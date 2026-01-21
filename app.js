const express = require('express')
const expressSession = require('express-session')
const dotenv = require('dotenv')
const fileUpload = require('express-fileupload')
const { engine } = require('express-handlebars')

const conn = require('./conn')

dotenv.config()
conn()

const app = express()
const PORT = process.env.PORT || 10000
const SESSION_SECRET = process.env.SESSION_SECRET || 'deneme'
const time = 1000 * 60 * 30

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')

app.use(express.json())
app.use(fileUpload())
app.use(expressSession({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: time }
}))

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.send('GS Sitesi Render üzerinde çalışıyor ✅')
})

// Routerlar (istersen şimdilik kapatabilirsin)
app.use('/', require('./router/mainPage'))
app.use('/about', require('./router/aboutPage'))
app.use('/register', require('./router/registerPage'))
app.use('/login', require('./router/loginPage'))
app.use('/admin', require('./router/adminPage'))
app.use('/single', require('./router/singlePage'))

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`)
})
