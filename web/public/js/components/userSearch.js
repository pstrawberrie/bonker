import util from '../util';
import axios from 'axios';
import { UpdateUserList } from './userlist';

const UserSearch = {

  searchEle: document.getElementsByClassName('user-search')[0],

  attachEventListeners() {
    // Input Keyup
    const inputKeyupEvent = util.debounce(e => {
      const inputVal = e.target.value.trim();
      UserSearch.doSearch(inputVal);
    }, 420);

    this.inputEle.addEventListener('keyup', inputKeyupEvent);
  },

  doSearch(searchString) {
    util.pageLoader(true);
    axios.post('/user/search', {
      searchString
    }).catch(err => {
      console.log(`Error with user search POST: ${err}`);
      util.pageLoader(false);
    }).then(result => {
      if(result.data.result !== null) UpdateUserList(result.data);
      util.pageLoader(false);
    });
  },

  init() {
    if(this.searchEle == undefined) return;
    this.inputEle = document.querySelector('.user-search input');
    this.attachEventListeners();
  },

}

export default UserSearch;