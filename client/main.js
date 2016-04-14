//Collections for temp; Collection object from Meteor and can query.
var Dinos = new Meteor.Collection("dinoLib");

//Meteor has miniMongo running on client side and Mongo for server.
if (Meteor.isClient) {

    Template.header.title= function () {
      return "Hello Wassup";
    };

    Template.header.tagline = function() {
      return "VoteApp is here!";
    };

    //Adding it to the collection
    Template.addDino.events ({
      'click #addDino' : function(){
        var input = $('#dinoToAdd'); //jQuery, pulling off input element
        Dinos.insert({name: input.val()});
        input.val(''); //empty text box
      }
    });

    Template.dinos.dinos =function() {
      return Dinos.find({}); //Mongo Command
    }
}
