/*Name: traccia01
Active: true
Application: Global
Conditional: False
Run: Weekly
Day: Friday
Time zone:Europe/Rome
Time Hours:18 Minutes:00 Seconds:00
*/
Script:
//Creare uno scheduled job che ogni venerdì alle ore 18  cambi lo state in ‘on hold’, per ogni incident non ancora assegnato ad un gruppo e con state ‘new’.
var gr = new GlideRecord('incident');
gr.addEncodedQuery('assignment_groupISEMPTY^state=1');
gr.query();
while(gr.next()){
	gr.state = '3';
	gr.work_notes = 'Lo stato del ticket è stato posto"ON HOLD" da schedul job';
	gr.update();
}
