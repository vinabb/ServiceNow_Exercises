/*
Pagina di generazione javascript per service Now
*/


// Make category and subcategory mandatory when a user is inserted into the Assigned to field
g_form.addChangeListener(function(fieldName, oldValue, newValue) {
    if (fieldName === 'assigned_to') {
        g_form.setMandatory('category', true);
        g_form.setMandatory('subcategory', true);
    }
});

// Change Priority field to planning and add a banner message
g_form.setValue('priority', '2');
g_form.setUIHint('priority', { banner: 'Priority field has been changed' });

// Add user id to the short description
let shortDescription = g_form.getValue('short_description');
let userId = gs.getUserID();
g_form.setValue('short_description', shortDescription + ' - User ID: ' + userId);
