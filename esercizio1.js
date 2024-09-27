var esercizio1 = Class.create();
esercizio1.prototype = Object.extendsObject(AbstractAjaxProcessor, {

	scriviAsset: function(){

		var itemId = this.getParameter('sysparm_item');
		var gr = new GlideRecord('cmdb_ci');
		gr.addQuery('sys_id', itemId);
		gr.query();
		if(gr.next()){
			var asset = gr.asset;

		}
		return asset

	},



    type: 'esercizio1'
});