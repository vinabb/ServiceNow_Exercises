var gr = new GlideRecord('incident');
gr.addEncodedQuery('sys_updated_onONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()^state=2');
gr.query();
while(gr.next){
	gr.work_notes= "ADESSO SI CHE FUNZIONA";
	gr.update();

}