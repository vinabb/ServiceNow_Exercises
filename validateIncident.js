var validazioneIncident = Class.create();
validazioneIncident.prototype = {
 
    initialize:function(){},
 
    validateIncident: function(current){
        var descr = current.getValue('description');
        if (descr.length >= 50){
            gs.log("lunghezza: "+ current.description.length);
            return true;
        }
        else{
            return false;
        }
    },
 
    type: 'validazioneIncident'
};