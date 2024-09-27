/*Name: traccia02
Active: true
Application: Global
Conditional: false
Run: Monthly
Day: 31
Time zone: Europe/Rome
Time Hours:00 Minutes:00 Seconds:00
*/
var gr = new GlideRecord('incident');
gr.addEncodedQuery('priority=5^opened_atONLast year@javascript:gs.beginningOfLastYear()@javascript:gs.endOfLastYear()');
gr.query();
while(gr.next()){
	gr.urgency = '1';
	gr.work_notes = 'La Urgency del ticket è stata posta a "1" da schedul job';
	gr.update();
}