try{
  var x = myframe.document.querySelectorAll('textarea');
  var i = 0;
  for (i = 0; i < x.length; i++){
    x[i].value="NIL";
  }

  x = myframe.document.querySelectorAll('input[type="radio"]');
  for (i = 1; i < x.length; i++){
      if (x[i].getAttribute('name') == 'check'){
          continue;
      }
    if(x[i].getAttribute('value') == 4) //change the value to select from 1-poor, 2-fair, 3-good, 4-very good, 5-excellent
      x[i].click();
  }

}catch(err){
  console.log(err);
}
