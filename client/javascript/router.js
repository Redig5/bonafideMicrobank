/***************************************************************
   				 GESTION DES ROUTAGES DES MENUS
***************************************************************/
Router.configure({
	layoutTemplate : 'tmpltePrincipal',
	notFoundTemplate: 'tmplteNotExists',
    noRoutesTemplate: 'tmplteNotExists'
});

Router.map(function(){
	this.route('tmpltePageAccueil', { path : '/',
		onBeforeAction:function(pause){
            $('body, html').animate({
					scrollTop : 0
			}, 0);
            this.next();
        }
	});	
});