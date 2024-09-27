var avmAjax = Class.create();
avmAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {

//Dichiaro la funzione
avmFunzione: function(){
	//il parametro inizia sempre con sysparm_ seguito da un nome di fantasia che vogliamo assegnare al parametro

	var userid = this.getParameter('sysparm_user');

	//qualsiasi parametro passeremo dallo script client verrà memorizzato in questa variabile userid

	//creo un oggetto GlideRecord che mi darà accesso alla tabella degli User per prendere nome e cognome del caller. sys_user è la tabella che contiene tutti i campi da cui estrapolare i ns
	
	var gr= new GlideRecord('sys_user');
	gr.addQuery('sys_id', userid );
	gr.query();
	if(gr.next){
		var nomeCompleto = gr.first_name + ' ' + gr.last_name;
	}
	return nomeCompleto;


},


    type: 'avmAjax'
});