import util from '../util';

const Userlist = {

  ele: {
    container: document.querySelector('[data-userlist]'),
    btnTwitchId: document.querySelectorAll('[data-twitch-id]'),
  },

  addEventListeners() {
    // Copy Twitch ID
    [...this.ele.btnTwitchId].map(btn => {
      let stop = false;
      btn.addEventListener('click', e => {
        const twitchId = e.target.dataset.twitchId;
        util.clipboard(twitchId).catch(() => {
          stop = true;
          btn.classList.add('error');
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
      })
    });
  },

  init() {
    if(this.ele.container !== null) this.addEventListeners();
  }

};

export default Userlist;