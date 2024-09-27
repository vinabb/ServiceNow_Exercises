var testAjax = Class.create();
testAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {
 
//dichiaro la funzione
 
testFunzione: function(){
 
    var userid = this.getParameter('sysparm_user');// il parametro inizia sempre con sysparm_ saguito da un nome di fantasia che vogliamo assegnare al parametro
 
    // qualsiasi parametro passeremo dallo script client verrà memorizzato in questa variabile userid.
 
    //creo un oggetto GlideRecord che mi darà accesso alla tabella dei User per prendere il nome ed il cognome del caller dell'incident.
 
    var gr= new GlideRecord('sys_user'); // tabella di sistema con record relativi a users
    gr.addQuery('sys_id', userid );
    gr.query();
 
        if(gr.next()){
            var email= gr.email;
        }
       
    return email;
},
 
 
    type: 'testAjax'
});