function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
	//Type appropriate comment here, and begin script below
	
	//1) creo un oggetto GlideAjax per richiamare lo script include
	var ga = new GlideAjax('avmAjax');

	//2) creo un parametro per richiamare la funzione nello script include
	ga.addParam('sysparm_name','avmFunzione');

	//3) creo un parametro per contestualizzare il parametro sysparm_user che ho creato nello script include
	ga.addParam('sysparm_user', newValue);



}