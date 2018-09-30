import util from '../util';
import moment from 'moment';

export const Userlist = {

  ele: {
    container: document.querySelector('[data-userlist]'),
    btnTwitchId() {return document.querySelectorAll('[data-twitch-id]')},
  },

  /**
   * Add Event Listeners
   * @param {boolean} bool - pass true to remove event listeners first
   */
  addEventListeners(bool) {

    // Copy Twitch ID
    [...this.ele.btnTwitchId()].map(btn => {
      if(bool) btn.removeEventListener('click', Userlist.events.copyTwitchId);
      btn.addEventListener('click', Userlist.events.copyTwitchId);
    });

  },

  events: {

    copyTwitchId(e) {
      let stop = false;
      const twitchId = e.target.dataset.twitchId;
      util.clipboard(twitchId).catch(() => {
        stop = true;
        e.target.classList.add('error');
        setTimeout(() => {
          e.target.classList.remove('error');
        },420);
      }).then(() => {
        if(stop) return;
        e.target.classList.add('success');
        setTimeout(() => {
          e.target.classList.remove('success');
        },420)
      });
    }

  },

  init() {
    if(this.ele.container !== null) this.addEventListeners();
  }

};
/*
.userlist__user
  .userlist__user_item.name
    if user.isAdmin
      span.fa.fa-star.colorGold(title="Admin")
      span #{user.twitchName}
    else
      span= user.twitchName
  .userlist__user_item.active Active  #{m(user.lastActive).fromNow()}
  .userlist__user_item.joined Joined  #{m(user.joinDate).fromNow()}
  .userlist__user_actions
    .btn(data-twitch-id=user.twitchId) Copy ID
      span.icon-event.above.fa.fa-clipboard-check
*/
export const UpdateUserList = (newUsers) => {

  // Create a new user element from user object
  function createUserEle(user) {
    const wrapper = document.createElement('div');
    wrapper.className = 'userlist__user';

    const username = document.createElement('div');
    username.className = 'userlist__user_item';
    username.classList.add('name');
    if(user.isAdmin) {
      const usernameIcon = document.createElement('span');
      usernameIcon.className = 'fa';
      usernameIcon.classList.add('fa-star');
      usernameIcon.classList.add('colorGold');
      username.appendChild(usernameIcon);
    }
    const usernameText = document.createElement('span');
    usernameText.innerText = user.twitchName;
    username.appendChild(usernameText);
    wrapper.appendChild(username);

    const useractive = document.createElement('div');
    useractive.className = 'userlist__user_item';
    useractive.innerHTML = `Active ${moment(user.lastActive).fromNow()}`;
    wrapper.appendChild(useractive);

    const userjoin = document.createElement('div');
    userjoin.className = 'userlist__user_item';
    userjoin.innerHTML = `Joined ${moment(user.lastActive).fromNow()}`;
    wrapper.appendChild(userjoin);

    const userActions = document.createElement('div');
    userActions.className = 'userlist__user_actions';

    const copyIdBtn = document.createElement('div');
    copyIdBtn.className = 'btn';
    copyIdBtn.setAttribute('data-twitch-id', user.twitchId);
    copyIdBtn.textContent = 'Copy ID';
    const copyIdSpan = document.createElement('span');
    copyIdSpan.className = 'icon-event';
    copyIdSpan.classList.add('above');
    copyIdSpan.classList.add('fa');
    copyIdSpan.classList.add('fa-clipboard-check');

    copyIdBtn.appendChild(copyIdSpan);
    userActions.appendChild(copyIdBtn);
    wrapper.appendChild(userActions);

    Userlist.ele.container.appendChild(wrapper);

  }

  Userlist.ele.container.innerHTML = '';
  newUsers.forEach(user => {
    createUserEle(user);
  });
  Userlist.addEventListeners(true);
  
}