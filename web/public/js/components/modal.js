import util from '../util';

const Modal = {

  //+ Local Element Utilities
  ele: {
    triggers: document.querySelectorAll('a[data-triggers-modal]'),
    modals: document.getElementsByClassName('modal'),
    getModal(name) {
      return document.querySelector(`[data-modal=${name}]`)
    }
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
    document.addEventListener('click', (e) => {
      const closestModal = util.getClosestEleByClass(e.target, 'modal__body');
      const closestTrigger = util.getClosestEleByClass(e.target, 'modal-trigger');
      if(closestModal == null && closestTrigger == null) Modal.display(false);
    });

  },

  //+ Function to Display or Hide Modals
  display(bool, modalEle) {
    if(bool === false) {
      [...Modal.ele.modals].map(modal => {
        modal.classList.remove('active');
      })
    }
    if(!modalEle) return;
    modalEle.classList.add('active');
  },

  //+ Initialize Modals
  init() {
    this.addEventListeners();
  }

}

export default Modal;