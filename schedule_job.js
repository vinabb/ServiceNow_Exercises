var gr = new GlideRecord('incident');
gr.addEncodedQuery('state=2');
gr.query();
while(gr.next()){
	gr.state = '8';
	gr.work_notes = 'Il ticket è stato cancellato da schedul job';
	gr.update();
	
}