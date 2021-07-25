var cleave = new Cleave('.input-element', {
  date: true,
  datePattern: ['m', 'Y'],
});

var cleave = new Cleave('.card-no', {
  creditCard: true,
  delimiter: '-',
  blocks: [4, 4, 4, 4],

  onCreditCardTypeChanged: function (type) {
    type === 'visa'
      ? document.querySelector('.fa-cc-visa').classList.add('active')
      : document.querySelector('.fa-cc-visa').classList.remove('active');

    type === 'mastercard'
      ? document.querySelector('.fa-cc-mastercard').classList.add('active')
      : document.querySelector('.fa-cc-mastercard').classList.remove('active');

    type === 'jcb'
      ? document.querySelector('.fa-cc-jcb').classList.add('active')
      : document.querySelector('.fa-cc-jcb').classList.remove('active');

    type === 'amex'
      ? document.querySelector('.fa-cc-amex').classList.add('active')
      : document.querySelector('.fa-cc-amex').classList.remove('active');
  },
});
