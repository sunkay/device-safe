Template.header.helpers({
  navbarToggleCollapse: function(){
     return Session.get('navbarToggle');
  }
});

Template.header.rendered = function () {
   Meteor.setInterval(function(){
    Session.set('navbarToggle', $('#btnRespNav').is(':visible'));
   }, 3000);
};