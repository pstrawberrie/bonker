import util from '../util';

const UserSearch = {

  searchEle: document.getElementsByClassName('user-search')[0],

  attachEventListeners() {
    // Input Keyup
    const inputKeyupEvent = util.debounce(e => {
      const inputVal = e.target.value.trim();
      if (inputVal === '') return;
      console.log(inputVal);
    }, 420);

    this.inputEle.addEventListener('keyup', inputKeyupEvent);
  },

  init() {
    if(this.searchEle == undefined) return;
    this.inputEle = document.querySelector('.user-search input');
    this.attachEventListeners();
  },

}

export default UserSearch;