// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

var reservations = [
    {
    customerName: "Andre The Giant",
    customerPhoneNumber: "2222222222",
    customerEmail: "testemail1@email.com",
    customerId: 1,
    },
    {
    customerName: "John Snow",
    customerPhoneNumber: "5555555555",
    customerEmail: "testemail2@email.com",
    customerId: 2,
    },
    {
    customerName: "Ron Burgundy",
    customerPhoneNumber: "7777777777",
    customerEmail: "testemail3@email.com",
    customerId: 3,
    }
  ];

// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  // Search for Specific Character (or all characters) - provides JSON
  app.get("/api/:reservations?", function(req, res) {
    var chosen = req.params.reservations;
  
    if (chosen) {
      console.log(chosen);
  
      for (var i = 0; i < reservations.length; i++) {
        if (chosen === reservations[i].routeName) {
          return res.json(reservations[i]);
        }
      }
  
      return res.json(false);
    }
    return res.json(reservations);
  });
  
  // Create New Reservations - takes in JSON input
  app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    characters.push(newReservation);
  
    res.json(newReservation);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });