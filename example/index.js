import dva from 'dva';
import '../src/index.less';
import {ModalView} from "../src";

// 1. Initialize
const app = dva();

ModalView.bindApp(app);
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');