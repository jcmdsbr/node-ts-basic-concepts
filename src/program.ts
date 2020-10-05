import Startup from './startup';

const port = process.env.PORT || '3050';

Startup.app.listen(port);

