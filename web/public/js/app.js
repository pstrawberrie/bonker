import '../less/global.less';
import Button from './components/button';
import Modal from './components/modal';
import Userlist from './components/userlist';
import UserSearch from './components/userSearch';

document.addEventListener('DOMContentLoaded', () => {
  Button.init();
  Modal.init();
  Userlist.init();
  UserSearch.init();
});