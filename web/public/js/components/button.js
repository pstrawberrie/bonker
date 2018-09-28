const Button = {
  //@TODO: We can abstract the button 'success' and 'error' states into a single function 
  //       instead of using direct methods like `this.buttonEvents.iconAbove(ele)`, 
  //       maybe we can use something like btn.listening

  ele: {
    iconAboveBtns: document.querySelectorAll('.btn[data-icon-above]'),
  },

  attachEventListeners() {
    // Icon Above
    if(this.ele.iconAboveBtns.length) {
      [...this.ele.iconAboveBtns].map(btn => {
        btn.addEventListener('click', () => {
          Button.buttonEvents.iconAbove(btn);
        });
      })
    }
    
  },

  buttonEvents: {
    // Icon Above Event
    iconAbove(ele) {
      ele.classList.add('icon-active');
      setTimeout(() => {
        ele.classList.remove('icon-active');
      },300);

    },
  },

  init() {
    this.attachEventListeners();
  },

};

export default Button;