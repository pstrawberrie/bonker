import util from '../util';

const Modal = {

  //+ Local Element Utilities
  ele: {
    triggers: document.querySelectorAll('a[data-triggers-modal]'),
    modals: document.getElementsByClassName('modal'),
    getModal(name) {
      return document.querySelector(`[data-modal=${name}]`)
    },
    getModalBody(modal) {
      return modal.querySelector('.modal__body');
    },
    getActiveModal() {
      return document.querySelector('.modal.active');
    },
  },

  //+ Add Event Listeners
  addEventListeners() {

    // Modal Triggers
    [...this.ele.triggers].map(trigger => {
      trigger.addEventListener('click', e => {
        const modal = Modal.ele.getModal(e.target.dataset.triggersModal);
        Modal.display(true, modal);
      });
    });

    // Document Off-click
    document.addEventListener('click', e => {
      const closestModal = util.getClosestEleByClass(e.target, 'modal__body');
      const closestTrigger = util.getClosestEleByClass(e.target, 'modal-trigger');
      if(closestModal == null && closestTrigger == null) Modal.display(false);
    });
    // Document Escape Key
    document.addEventListener('keyup', e => {
      if(e.keyCode === 27 || e.which === 27) {
        Modal.display(false);
      }
    });

  },

  //+ Function to Display or Hide Modals (fixed animations built in)
  display(bool, modalEle) {
    if(bool == false) {
      //- Close
      const modalEle = Modal.ele.getActiveModal();
      if(modalEle == null) return;
      const modalBody = Modal.ele.getModalBody(modalEle);
      util.addAnimation(modalBody, 'fadeOutUp');
      setTimeout(() => {
        util.prepAnimations([modalBody]);
        util.addAnimation(modalEle, 'fadeOut');
        setTimeout(() => {
          modalEle.classList.add('hidden');
          modalEle.classList.remove('active');
        },250);
      },250);
      return;
    } else {
      //- Open
      if(!modalEle) return;
      const modalBody = Modal.ele.getModalBody(modalEle);
      util.prepAnimations([modalEle, modalBody]);
      modalEle.classList.add('active');
      modalEle.classList.remove('hidden');
      util.addAnimation(modalEle, 'fadeIn');
      setTimeout(() => {
        util.addAnimation(modalBody, 'fadeInDown');
      },130);
    }
  },

  //+ Initialize Modals
  init() {
    this.addEventListeners();
  }

}

export default Modal;