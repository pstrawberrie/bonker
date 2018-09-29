const Button = {

  ele: {
    iconEventBtns: document.querySelectorAll('.btn.icon-event'),
  },

  attachEventListeners() {
    // Icon Above
    if(this.ele.iconEventBtns.length) {
      [...this.ele.iconEventBtns].map(btn => {
        btn.addEventListener('click', () => {
          Button.triggerBtnEvent(btn);
        });
      })
    }
    
  },

  triggerBtnEvent(ele) {
    ele.classList.add('icon-active');
    setTimeout(() => {
      ele.classList.remove('icon-active');
    },300);
  },

  init() {
    this.attachEventListeners();
  },

};

export default Button;