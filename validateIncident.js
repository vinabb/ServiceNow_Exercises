var validazioneIncident = Class.create();
validazioneIncident.prototype = {
 
    initialize:function(){},
 
    validateIncident: function(current){
        var descr = current.getValue('description');
        if (!descr || descr.length <= 50){
            return false;
        }
        else {
            gs.log("lunghezza: "+ current.description.length);
            return true;
        }
    },
 
    type: 'validazioneIncident'
};