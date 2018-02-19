var counter = 2;
var limit = 5;
var difficulty = 4; 

var pattern = '';
for (var x=0; x<difficulty; x++) {
  pattern += '0';
}

function addInput2(divName){

    if (counter == limit)  {
        alert("You have reached the limit of adding " + counter + " inputs");
    }
    else {
        var newdiv = document.createElement('div');
		
        newdiv.innerHTML = "<form class='form-horizontal'><fieldset><!-- Form Name --><legend>Block #"+counter+"</legend><!-- Text input--><div class='form-group'>  <label class='col-md-1 control-label' for='dateInput'>Date</label>    <div class='col-md-3'>  <input id='dateInput' name='dateInput' placeholder='placeholder' class='form-control input-md' type='text'>  </div></div><!-- Text input--><div class='form-group'>  <label class='col-md-1 control-label' for='userInput'>User</label>    <div class='col-md-3'>  <input id='userInput' name='userInput' placeholder='placeholder' class='form-control input-md' type='text'>  </div></div><!-- Text input--><div class='form-group'>  <label class='col-md-1 control-label' for='jobInput'>Job &amp; Parts</label>    <div class='col-md-3'>  <input id='jobInput' name='jobInput' placeholder='placeholder' class='form-control input-md' type='text'>  </div></div><!-- Text input--><div class='form-group'>  <label class='col-md-1 control-label' for='kmInput'>km</label>    <div class='col-md-3'>  <input id='kmInput' name='kmInput' placeholder='placeholder' class='form-control input-md' type='text'>  </div></div><!-- Text input--><div class='form-group'>  <label class='col-md-1 control-label' for='hashInput'>Hash</label>    <div class='col-md-3'>  <input id='hashInput' name='hashInput' placeholder='placeholder' class='form-control input-md' type='text' readonly>  </div></div><!-- Text input--><div class='form-group'>  <label class='col-md-1 control-label' for='previousInput'>Previous Hash</label>    <div class='col-md-3'>  <input id='previousInput' name='previousInput' placeholder='placeholder' class='form-control input-md' type='text' readonly>  </div></div><!-- Button --><div class='form-group'>  <label class='col-md-1 control-label' for='singlebutton'></label>  <div class='col-md-3'>    <button id='singlebutton' name='singlebutton' class='btn btn-success' onClick=addInput2('dynamicInput')>Add to Ledger</button>  </div></div></fieldset></form>";

        document.getElementById(divName).appendChild(newdiv);
		getPattern();
		console.log(pattern);
        counter++;
		sha256(pattern);
    }
}

function sha256(pattern) {
  // calculate a SHA256 hash of the contents of the block
  console.log(CryptoJS.SHA256(pattern).toString());
}

function getPattern(){
	pattern += document.getElementById('dateInput').value;
	pattern += document.getElementById('userInput').value;
	pattern += document.getElementById('jobInput').value;
	pattern += document.getElementById('kmInput').value;
	pattern += document.getElementById('dateInput').value;
	pattern += document.getElementById('previousInput').value;
}