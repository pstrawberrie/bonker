const util = {

  hasClass(elem, cls) {
    var str = " " + elem.className + " ";
    var testCls = " " + cls + " ";
    return(str.indexOf(testCls) != -1) ;
  },

  getClosestEleByClass(el, cls) {
    while (el  && el !== document) {
      if (util.hasClass(el, cls)) return el;
      el = el.parentNode;
    }
    return null;
  },

}

export default util;