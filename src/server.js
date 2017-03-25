import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import routes from './routing/routes';

const app = Express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'static'));

app.use(Express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
  const location = req.url;

  match({routes, location}, (err, redirectLocation, renderProps) => {
      if (err) {
        return res.status(500).send(err.message);
      }

      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      let content;

      if (renderProps) {
        content = renderToString(<RouterContext {...renderProps}/>);
      }
      else {
        content = renderToString(<div>404</div>);
        res.status(404);
      }

      return res.render('index', {content});
    }
  );
});

app.listen(8080);
