import path from 'path';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const { app } = require('electron').remote;
let dbFilename;
if (process.env.NODE_ENV === 'development') {
  dbFilename = './db.json';
} else {
  // (mac OSX)e.x. /Users/xxx/Library/Application Support/Electron/db.json
  dbFilename = path.join(app.getPath('userData'), 'db.json');
}
const adapter = new FileSync(dbFilename);
const db = low(adapter);

const dirPath = db
  .get('config')
  .find({ key: 'dirPath' })
  .value();

const videos = db.get(dirPath.value).value();

const state = {
  list: videos,
  currentKey: '',
};

const mutations = {
  setCurrentKey(state, item) {
    if (state.currentKey === item.name) {
      state.currentKey = null;
    } else {
      state.currentKey = item.name;
    }
  },
};

const actions = {
  // someAsyncTask({ commit }) {
  //   // do something async
  //   commit('INCREMENT_MAIN_COUNTER');
  // },
};

export default {
  state,
  mutations,
  actions,
};
