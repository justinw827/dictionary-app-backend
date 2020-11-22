# Dictionary App Backend

## Instructions to start

### `npm install && npm start`

## Notes
- Database is deleted on program exit. If you would like the data to persist passed program exit, remove the callback
function in app.js.
```javascript
mongoose.connect('mongodb://localhost', { useNewUrlParser: true, useUnifiedTopology: true }, () => mongoose.connection.db.dropDatabase());
```