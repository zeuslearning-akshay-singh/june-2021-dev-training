// ================== BASICS OF BACKBONE JS ===============================

// ------------------- GETTING STARTED -----------------------------------
// Chapter 1.a] Models and its attributes 

// JS Creating class as WebsiteModel
// Initialize acts as constructor which work as default

//  WebsiteModel = Backbone.Model.extend({
//      initialize: function(){
//         // alert("Hello World, Im learning JS ") 
//      }
//  })

// document ready function is only executed when whole documnet is reloaded  
// Defining the attribute and using "get" to take that attribute
// $(document).ready(function(){
//     var page1 = new WebsiteModel({name : "The best is Yet to Come", barcode: 1});
//     alert("Hello World, " + page1.get("name") + " and barcode is "+page1.get("barcode"));
// })    


// Using "set" and overwriting the attribute
// $(document).ready(function(){
//     var page1 = new WebsiteModel({name : "The best is Yet to Come", barcode: 1}); // Defining the attribute
//     page1.set({name:"I'm an Event "}); // Using set to overwrite it 
//     alert("Hello World, " + page1.get("name") + " and my barcode is "+page1.get("barcode")); // Using get to take values
// })

// ----------------------------------------------------------------------------------------------------------------------------------
// Chapter: 1.b] Models and Attributes using default 
// Models
// WebsiteModel = Backbone.Model.extend({

//     defaults: {
//         name: "I'm Event Orgainizer",
//         barcode: 1
//     },

//     initialize: function(){
//     }

// })

// $(document).ready(function(){
//     var page1 = new WebsiteModel(); 
//     alert("Hello World, " + page1.get("name") + " and my barcode is "+page1.get("barcode")); // Using get to take values
// });


// --------------------------------------------------------------------------------------------------------
// Chapter: 1.c] Model Change Events
// Example on Model
// SandwichModel = Backbone.Model.extend({

//     defaults: {
//         bread: "wheat"
//     },

//     initialize: function(){
//         this.bindEvents();
//     },

//     bindEvents: function(){
//         this.bind("change:bread",function(model){
//             // console.log(model);
//             var my_new_bread = model.get("bread");
//             alert("Bread is successfully changed to " + my_new_bread);
//         });
//     }

// })

// $(document).ready(function(){
//     var my_sandwich = new SandwichModel(); 
//      my_sandwich.set({bread: "jalapeno"});
//      my_sandwich.set({bread: "null"});
// });

// ==============================================================================================================================
// Chapter 2.a] Views  ( Creating views )

// TheView = Backbone.View.extend({
//     defaults:{
//         // default values
//     },
//     initialize: function(){
//         alert("My first View using Backbone js")
//     }
// });

// $(document).ready(function(){
//     let view_var = new TheView();
// });

// --------------------------------------------------------------------
// Chapter 2.b] Difference between el and $el

/* About el => Reference to a DOM object && 
$el => jquery object that still refer to a DOM object  as el does..
*/ 

// TheView = Backbone.View.extend({
//     defaults:{
//         // default values
//     },
//     initialize: function(){
//         console.log(this.el);
//         console.log(this.$el);
//         this.$el.append("Hello I am Content")
//     }
// });

// $(document).ready(function(){
//     let view_variable = new TheView({
//         el: $("#non-purpose")
//     }); 
// });

// --------------------------------------------------------------------
// Chapter 2.c] Creating New HTML elements

// TheView = Backbone.View.extend({
//     tagName: "span",
//     className:"span_class",
//     id:"span_id",
//     defaults:{
//         // default values
//     },
//     initialize: function(){
//        console.log(this.el);
//        console.log(this.$el);
//        $("#non-purpose").append(this.el)
//     }
// });

// $(document).ready(function(){
//     let view_variable = new TheView(); 
// });

// ------------------------------------------------------------------------
// Chapter 2.d] Views Using the render function 

// TheView = Backbone.View.extend({
       
//         defaults:{
//             // default values
//         },
//         initialize: function(){
//             this.render();
//         },
//         render: function(){

//                 let vari = _.template($("#ourTemplate").html(),{});
//                 console.log(this.el);
//                 console.log(this.$el);
//                 this.$el.html(vari); //using jquey for inserting data
//         }
        
//     });
    
//     $(document).ready(function(){
//         let view_variable = new TheView({el: $("#non-purpose")}); 
//     });

// ------------------------------------------------------------------------
// Chapter 2.e] Events used in views 

// TheView = Backbone.View.extend({  
//     defaults:{
//         // default values
//     },

//     initialize: function(){
//         this.render();
//     },
//     render: function(){

//             let vari = _.template($("#ourTemplate").html(),{});
//             console.log(this.el);
//             console.log(this.$el);
//             this.$el.html(vari);
//     },

//     // Events in Backbone js::
//     events: {
//     // "event id/class/tag or if not mentioned it considers el " : "function"
//      "click" : "clicked",
//      "mouseover" : "mousefunction"
//     },
//     // Click function used inside the events
//     clicked: function(){
//         alert("You has clicked me");
//     },
//     mousefunction: function(){
//         alert("Mouseover function is been called");
//     }
// });

// $(document).ready(function(){
//     let view_variable = new TheView({el: $("#non-purpose")}); 
// });

// =======================================================================================
// Chapter 3.a] Introduction to Collection

// StudentModel = Backbone.Model.extend({
//     default: {
//         name: "unknown"
//     }
// });

// StudentCollection = Backbone.Collection.extend({
//     model: StudentModel,
//     initialize: function(){
//     }
// });

// $(document).ready(function(){

//     var akshay =  new StudentModel({name:"Akshay" , id : 1});
//     var ajay =  new StudentModel({name:"Ajay" , id : 2});
//     var class_1 =  new StudentCollection([akshay,ajay]);
//     console.log(class_1);
//     console.log("Class_1 size "+ class_1.length);
//     displayCollection("Class_1 students => " , class_1);
// });

// function displayCollection(string , collection){
//     console.log( string + " " + JSON.stringify(collection.toJSON()));
// }

// --------------------------------------------------------------------------------

// Chapter 3.b] Adding and Removing the elements ::

// StudentModel = Backbone.Model.extend({
//     default: {
//         name: "unknown"
//     }
// });

// StudentCollection = Backbone.Collection.extend({
//     model: StudentModel,
//     initialize: function(){
//     }
// });

// $(document).ready(function(){

//     var akshay =  new StudentModel({name:"Akshay" , id : 1});
//     var ajay =  new StudentModel({name:"Ajay" , id : 2});
//     var class_1 =  new StudentCollection([akshay,ajay]);
//     console.log(class_1);
//     console.log("Class_1 size "+ class_1.length);
//     displayCollection("Class_1 students => " , class_1);

//         // Adding inside the collection ::
//     var vjay =  new StudentModel({name:"Vjay" , id : 3});
//     class_1.add([vjay]); //We can add more here by using ' , '
//     displayCollection("Updated Class_1 students => " , class_1);

//         // Removing inside the collection ::
//     class_1.remove([vjay]); //We can add more here by using ' , '
//     displayCollection("paid fees students from Class_1 students => " , class_1);

// });

// function displayCollection(string , collection){
//     console.log( string + " " + JSON.stringify(collection.toJSON()));
// }

// --------------------------------------------------------------------------------

// Chapter 3.c] Modfying Elements within the Collection ::

// StudentModel = Backbone.Model.extend({
//     default: {
//         name: "unknown"
//     }
// });

// StudentCollection = Backbone.Collection.extend({
//     model: StudentModel,
//     initialize: function(){
//     }
// });

// $(document).ready(function(){
//     var akshay =  new StudentModel({name:"akshay" , id : 1});
//     var ajay =  new StudentModel({name:"Ajay Singh" , id : 2});
//     var student_group =  new StudentCollection([akshay,ajay]);
//     displayCollection("paid fees students from Class_1 students => " , student_group);

//     // Modifying the Collection ::
//     var student = student_group.get(1); //Geting detail from id
//     student.set({name : "akshay Singh"}); //Modfiying it from "akshay" to "akshay Singh"
//     displayCollection("Modifed_1 Students from Class_1 students => " , student_group);

//     // Still we can modify variable "akshay"
//     akshay.set({name : "Akshay Singh"})
//     displayCollection("Modifed_2 Students from Class_2 students => " , student_group);

// });

// function displayCollection(string , collection){
//     console.log( string + " " + JSON.stringify(collection.toJSON()));
// }

// --------------------------------------------------------------------------------
// Chapter 3.d] Events in Collection ::

// StudentModel = Backbone.Model.extend({
//     default: {
//         name: "unknown"
//     }
// });

// StudentCollection = Backbone.Collection.extend({
//     model: StudentModel,
//     initialize: function(){
//         this.bindEvents();
//     },
//     bindEvents: function(){
//         this.on("change : name", function(model){
//             // when set function is performed
//             alert("You change the name : " + model.get("name"));
//         });
//         this.on("add", function(model){
//             // when add is performed
//             alert("You added the name : " + model.get("name"));
//         });
//         this.on("remove", function(model){
//             // when remove is performed
//             alert("You removed the name : " + model.get("name"));
//         });
//     }
// });

// $(document).ready(function(){
//     var akshay =  new StudentModel({name:"Akshay" , id : 1});
//     var ajay =  new StudentModel({name:"Ajay " , id : 2});
//     var student_group =  new StudentCollection([akshay,ajay]);
//     displayCollection("Class_1 students => " , student_group);

//     // Adding inside the collection ::
//     var vjay =  new StudentModel({name:"Vjay" , id : 3});
//     student_group.add([vjay]); //We can add more here by using ' , '
//     displayCollection("Updated student_group students => " , student_group);
    
//     // Removing inside the collection ::
//     student_group.remove([vjay]); //We can add more here by using ' , '
//     displayCollection("paid fees students from student_group students => " , student_group);

//     // Set 
//     akshay.set({name : "Akshay Singh"});
//     ajay.set({name : "Ajay Singh"});

// });

// function displayCollection(string , collection){
//     console.log( string + " " + JSON.stringify(collection.toJSON()));
// }

// --------------------------------------------------------------------------------

