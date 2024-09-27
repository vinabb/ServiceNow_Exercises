function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }
 
// 1) creo un oggetto glideAjax per richiamare lo script include
  var ga = new GlideAjax('testAjax'); // nome dello script include
 
  //2) creo un parametro che mi permette di accedere alla funzione nello script include:
 
  ga.addParam('sysparm_name', 'testFunzione');
   
 //3)  aggiungo un parametro per contestualizzare il parametro sysparm_user che ho creato nello script include
 
 ga.addParam('sysparm_user', newValue ); // newValue perchè abbiamo il client script di tipo onChange
 
 //4) si fa la chiamata asincrona e si definisce la funzione di callBack ( tutta sintassi)
 
 ga.getXML(callBackFunction);
 
    function callBackFunction(response){
        var answer= response.responseXML.documentElement.getAttribute("answer");
        g_form.addInfoMessage(answer);
    }
 
}