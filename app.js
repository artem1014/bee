const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const checkAuth = require('./middlewares/checkAuth');

PORT = 3005;

const app = express()

const DB = {
  todos: [
    {
      id: 1,
      login: 'Tiger',
      email: 'tiger@mail.ru',
      text: 'Chill',
      status: false,
    },
    {
      id: 2,
      login: 'Monkey',
      email: 'monkey2@mail.ru',
      text: 'Climb somewhere',
      status: false,
    },
    {
      id: 3,
      login: 'Snake',
      email: 'snake@mail.ru',
      text: 'Be disgusting',
      status: false,
    },
    {
      id: 4,
      login: 'Hippo',
      email: 'hippo@mail.ru',
      text: 'Lay In The Dirt',
      status: false,
    },
  ],
};

const usersDB = {
  users: [
    {
      id: 1,
      login: 'admin',
      fullname: 'admin`',
      password: '123'
    },
  ]
}

app.set('cookieName', 'ArtyCookie')
app.use(express.urlencoded())
app.use(express.json())

app.use(cors({
  origin: true,
  credentials: true,
}))
app.use(session({
  name: app.get('cookieName'),
  secret: 'sdg348g3g',
  resave: false,
  saveUninitialized: false,
  store: new FileStore({}),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400,
  },
})),

app.post('/signin', (req, res) => {
  const { password, login } = req.body
  if (password && login) {
    try {
      const currentUser = usersDB.users.filter(item => item.login === login)[0]
      console.log(currentUser);
      if (currentUser && currentUser.password) {
        req.session.user = {
          id: currentUser.id,
          login: currentUser.login,
        }
        return res.json({ id: currentUser.id, login: currentUser.login })
      }
      return res.sendStatus(401)
    } catch (error) {
      return res.sendStatus(500)
    }
  }
  return res.sendStatus(400)
})

app.get('/signout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500)
    res.clearCookie(req.app.get('cookieName'))
    return res.sendStatus(200)
  })
})

app.get('/check', checkAuth, (req, res) => {
  try {
    const user = usersDB.users.filter(item => item.id === req.session.user.id)[0]
    return res.json(user)
  } catch (error) {
    return res.sendStatus(500)
  }
})

app.get('/all', async (req, res) => {
  const noteData = DB.todos;
  res.json(noteData)
})

app.post('/del', async (req, res) => {
  const { id } = req.body;
  DB.todos = DB.todos.filter(el => el.id != id);
  res.sendStatus(200)
})

app.post('/add', async (req, res) => {
  const { text, email, login } = req.body;
  const newItem = { id: (Math.floor(Math.random() * 100)) * (Math.floor(Math.random() * 100)), login, email, text, status: false }
  DB.todos.push(newItem);
  res.json(newItem)
})

app.post('/status', async (req, res) => {
  if (req.body) {
    const { id } = req.body;
    DB.todos.map(el => {
      if (el.id === id) {
        el.status = !el.status
        return el
      } else
        return el
    })
    res.sendStatus(200)
  }
})

app.post('/edit', async (req, res) => {
  if (req.body) {
    const { id, text } = req.body;
    const newArr = DB.todos.map(el => {
      if (el.id === id) {
        el.text = text
        return el
      } else
        return el
    })
    const edittedObj = newArr.find(el => el.id === id)
    return res.json(edittedObj)
  }
})


app.listen(PORT, () => {
  console.log('Server has been started')
})
