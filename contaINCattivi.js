esempio1
// Visualizzare il conteggio di tutti gli INC attivi
// creare un oggetto GlideAggregate
var ga = new GlideAggregate('incident');
// creo una query per filtrare i record da contare
ga.addEncodedQuery('active=true');
//applico la funzione count all'oggetto GlideAggregate
ga.addAggregate('COUNT');
//eseguo la query
ga.query();

while(ga.next()){
	//voglio stampare il risutato nel log
	gs.info(ga.getAggregate('COUNT'));
	
}