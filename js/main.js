var cleave = new Cleave('.input-element', {
  date: true,
  datePattern: ['m', 'Y'],
});

var cleave = new Cleave('.card-no', {
  creditCard: true,
  delimiter: '-',
  blocks: [4, 4, 4, 4],
  uppercase: true,
  onCreditCardTypeChanged: function (type) {},
});
