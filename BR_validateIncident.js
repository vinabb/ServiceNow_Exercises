(function executeRule(current, previous /*null when async*/ ) {

    var validator = new validazioneIncident();
    if (!validator.validateIncident(current)) {
        current.setAbortAction(true);
        gs.addInfoMessage("L'incident non può essere creato in quanto il campo Descrizione è troppo corto");
    } else {
        gs.addInfoMessage("L'incident puo essere creato");
    }

})(current, previous);