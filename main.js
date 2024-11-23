const tabItems = document.querySelectorAll('.tab-items');
const tabContentItems = document.querySelectorAll('.tab-content-items');

// Select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    // add border to current tab
    this.classList.add('tab-border');
      // Grab content item from
const tabContentItem = document.querySelector(`#${this.id}-content`);

tabContentItem.classList.add('Show');
}

function removeBorder(){
    tabItems.forEach(item=> item.classList.remove('tab-border'))
}

function removeShow(){
    tabContentItems.forEach(item=> item.classList.remove('Show'))
}

// listen for tab click

tabItems.forEach(item=> item.addEventListener('click', selectItem));