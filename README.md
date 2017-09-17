
### How to Heroku:
`git clone (repo)`

`cd (repo)` 

Procfile: `web: node build/app.js` 

`heroku create (name)`

###### `git push heroku master`

`heroku ps:scale web=1` // Ensure that at least one instance of the app is running. Or turn "dynos" off with 0

`heroku open`

`heroku logs --tail`
