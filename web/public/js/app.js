import '../less/global.less';
import Button from './components/button';
import Modal from './components/modal';
import Userlist from './components/userlist';

document.addEventListener("DOMContentLoaded", () => {
  Button.init();
  Modal.init();
  Userlist.init();
});