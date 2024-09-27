// creare un oggetto GlideAggregate
var ga = new GlideAggregate('incident');

// uso COUNT per ottenere il num di INC x ogni categoria
ga.addAggregate('COUNT');

// creo una query x ragguppare i record da contare
ga.groupBy('category');

//eseguo la query
ga.query();

while(ga.next()){
	//voglio stampare il risutato nel log
	gs.info(ga.getDisplayValue('category')+ "= "+ga.getAggregate('COUNT'));

}