function newtab(x){

    var conf = confirm("This will open a new tab?");
        if ( conf == true ){
            window.open(x);
        }

}