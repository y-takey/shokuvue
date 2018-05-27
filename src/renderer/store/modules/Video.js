import path from 'path';
import _ from 'lodash';
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

const getVideos = (keyword = '') => {
  const base = db.get(dirPath.value);
  if (_.isEmpty(keyword)) return base.value();

  return base.filter(video => _.includes(video.name, keyword)).value();
};

const state = {
  dirPath: dirPath.value,
  list: getVideos(),
  currentKey: '',
  searchKey: '',
};

const mutations = {
  setCurrentKey(state, item) {
    if (state.currentKey === item.name) {
      state.currentKey = null;
    } else {
      state.currentKey = item.name;
    }
  },
  changeKeyword(state, value) {
    state.searchKey = value;
    state.list = getVideos(value);
  },
  clearCurrentKey() {
    state.currentKey = null;
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
