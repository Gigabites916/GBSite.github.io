function newtab(x){

    var conf = confirm("This will open a new tab?");
        if ( conf == true ){
            window.open(x);
        }

}

function changeText(idElement , content ) {
    var element = document.getElementById(idElement);
	element.innerHTML = content;
}

function staytuned( name ){
	alert("Stay tuned. " + name + " website will be uploaded and updated soon. " );
}