var options = [
    {selector: '#staggered-test', offset: 200, callback: console.log('hey there') },
    {selector: '#staggered-test', offset: 205, callback: 'Materialize.toast("Please continue scrolling!", 1500 )' },
    {selector: '#staggered-test', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
    {selector: '#image-test', offset: 500, callback: 'Materialize.fadeInImage("#image-test")' }
];
Materialize.scrollFire(options);
      