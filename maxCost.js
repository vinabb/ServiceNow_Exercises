//Dalla tabella cmdb_ci sommare tutti i valori contenuti nel campo "cost"

// creare un oggetto GlideAggregate
var ga = new GlideAggregate('cmdb_ci');

// uso la funzione SUM AVG MAX MIN
ga.addAggregate('MAX', 'cost');
//FILTRO cerca i record che obbediscono aal filtro applicato (per estrarre il filtro utilizzare la creazione del filtro e copiarlo con copy-query)
ga.addEncodedQuery('manufacturer=aa0a6df8c611227601cd2ed45989e0ac');
//eseguo la query
//ga.setGroup(false);
ga.query();

while(ga.next()){
	//voglio stampare il risutato nel log
	gs.info(ga.getAggregate('MAX', 'cost'));
}