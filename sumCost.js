//Dalla tabella cmdb_ci sommare tutti i valori contenuti nel campo "cost"

// creare un oggetto GlideAggregate
var ga = new GlideAggregate('cmdb_ci');

// uso la funzione SUM 
ga.addAggregate('SUM', 'cost');

//eseguo la query
ga.setGroup(false);
ga.query();

while(ga.next()){
	//voglio stampare il risutato nel log
	gs.info(ga.getAggregate('SUM', 'cost'));
}