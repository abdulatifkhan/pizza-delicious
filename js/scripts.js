// Pitsaga tanlov bo'lganda, tanlangan narsalar joylanadigan arraylar
var pizzaBread = []; /* Pitsa noni tanlanganda */
var pizzaSize = []; /* Pitsa hajmi tanlanganda */
var pizzaContent = []; /* Pitsa tarkibi tanlanganda */
var pizzaAddition = []; /* Pitsaning boshqa qo'shimchalari */
var totalCollection = [pizzaBread, pizzaSize, pizzaContent, pizzaAddition]; /* Jami to'plamlar yeg'indisi */

// Mavjud Arraylar
var breadTypes = ['ingichka', 'o\'rtacha', 'qalin', 'qolipli non']; /* Mavjud pitsa nonlari */
var breadSizes = ['25sm', '30sm', '35sm']; /* Mavjud pitsalar hajmi */
var breadContents = ['pomidor', 'kurka go\'shti', 'zaytun', 'tuzlangan bodring', 'qo\'ziqorin', 'qazi']; /* Mavjud pitsa tarkibi */
var breadAdditions = ['achchiq', 'sosiskali']; /* Mavjud pitsa qo'shimchalari */


// HTML elementlari
var elPizzaForm = document.querySelector('.pizza-form-js');
var elPizzaBreadSelect = elPizzaForm.querySelector('.pizza-bread-js');
var elPizzaSizesCheckbox = elPizzaForm.querySelector('.pizza-size-js');
var elPizzaContentCheckbox = elPizzaForm.querySelector('.pizza-content-js');
var elPizzaAdditonCheckbox = elPizzaForm.querySelector('.pizza-addition-js');

var elBreadChoice = elPizzaForm.querySelector('.bread-choice-js');
var elSizeChoice = elPizzaForm.querySelector('.size-choice-js');
var elContentChoice = elPizzaForm.querySelector('.content-choice-js');
var elAdditionalChoice = elPizzaForm.querySelector('.additional-choice-js');

for (var i = 0; i < breadTypes.length; i++) {
  var  elNewTypesOption = document.createElement('option');
  elNewTypesOption.setAttribute('value', breadTypes[i]);
  elNewTypesOption.textContent = breadTypes[i];

  elPizzaBreadSelect.appendChild( elNewTypesOption);
}

elNewTypesOption.addEventListener('change', function() {
  if(pizzaBread.indexOf(this.value) > -1) {
    pizzaBread.splice(pizzaBread.indexOf(this.value), 3);
  } else {
    pizzaBread.push(this.value);
  }
  elBreadChoice.textContent = '';
  elBreadChoice.append(pizzaBread.join(', '));
});

for (var i = 0; i < breadSizes.length; i++) {
  var  elNewSizeLabel = document.createElement('label');
  elNewSizeLabel.setAttribute('class', 'form-check-label mr-5');

  elPizzaSizesCheckbox.appendChild(elNewSizeLabel);

  var elNewSizeCheckbox = document.createElement('input');
  elNewSizeCheckbox.setAttribute('class', 'form-check-input ml-1');
  elNewSizeCheckbox.setAttribute('type', 'checkbox');
  elNewSizeCheckbox.setAttribute('name', 'bread-size');
  elNewSizeCheckbox.setAttribute('value', breadSizes[i]);

  elNewSizeLabel.textContent = breadSizes[i]

  elNewSizeLabel.appendChild(elNewSizeCheckbox);
}

elNewSizeCheckbox.addEventListener('change', function() {
  if(pizzaSize.indexOf(this.value) > -1) {
    pizzaSize.splice(pizzaSize.indexOf(this.value), 1);
  } else {
    pizzaSize.push(this.value);
  }
  elSizeChoice.textContent = '';
  elSizeChoice.append(pizzaSize.join(', '));
});



for (var i = 0; i < breadContents.length; i++) {
  var  elNewBreadContentsLabel = document.createElement('label');
  elNewBreadContentsLabel.setAttribute('class', 'form-check-label mr-5');

  elPizzaContentCheckbox.appendChild(elNewBreadContentsLabel);

  var elNewBreadContentsCheckbox = document.createElement('input');
  elNewBreadContentsCheckbox.setAttribute('class', 'form-check-input ml-1');
  elNewBreadContentsCheckbox.setAttribute('type', 'checkbox');
  elNewBreadContentsCheckbox.setAttribute('name', 'bread-content');
  elNewBreadContentsCheckbox.setAttribute('value', breadContents[i]);

  elNewBreadContentsLabel.textContent = breadContents[i]

  elNewBreadContentsLabel.appendChild(elNewBreadContentsCheckbox);
}

elNewBreadContentsCheckbox.addEventListener('change', function() {
  if(pizzaContent.indexOf(this.value) > -1) {
    pizzaContent.splice(pizzaContent.indexOf(this.value), 1);
  } else {
    pizzaContent.push(this.value);
    var newElSpan = document.createElement('span');
    newElSpan.textContent = pizzaContent[i];
    elPizzaContentCheckbox.appendChild(newElSpan);
  }
  elContentChoice.textContent = '';
  elContentChoice.append(pizzaContent.join(', '));

});



for (var i = 0; i < breadAdditions.length; i++) {
  var  elNewBreadAdditionsLabel = document.createElement('label');
  elNewBreadAdditionsLabel.setAttribute('class', 'form-check-label mr-5');

  elPizzaAdditonCheckbox.appendChild(elNewBreadAdditionsLabel);

  var elNewBreadAdditonCheckbox = document.createElement('input');
  elNewBreadAdditonCheckbox.setAttribute('class', 'form-check-input ml-1');
  elNewBreadAdditonCheckbox.setAttribute('type', 'checkbox');
  elNewBreadAdditonCheckbox.setAttribute('name', 'bread-content');
  elNewBreadAdditonCheckbox.setAttribute('value', breadAdditions[i]);

  elNewBreadAdditionsLabel.textContent = breadAdditions[i]

  elNewBreadAdditionsLabel.appendChild(elNewBreadAdditonCheckbox);
}

elNewBreadAdditonCheckbox.addEventListener('change', function() {
  if(pizzaAddition.indexOf(this.value) > -1) {
    pizzaAddition.splice(pizzaAddition.indexOf(this.value), 3);
  } else {
    pizzaAddition.push(this.value);
  }
  elAdditionalChoice.textContent = '';
  elAdditionalChoice.append(pizzaAddition.join(', '));
});

// var elPizzaOrderButton = elPizzaForm.querySelector('.pizza-order-js');

elPizzaForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  alert("Buyurtma yuborildi!");
});