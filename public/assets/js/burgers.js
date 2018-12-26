// A function to run when the "time to consume" button is clicked
 $(function() {
    $(".change-eat").on("click", function(event) {
      // get the id of the burger attached to the button
      var id = $(this).data("id");
      // get the new devoured state
      var newEat = $(this).data("neweat");
  
      var newEatState = {
        devoured: newEat
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed devoured to", newEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // The function to create a new burger when the submit button is clicked
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      // get the values out of the form for the new burger
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[name=eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // The function to delete a burger on the delete button click
    $(".delete-burger").on("click", function(event) {
      // get the id of the corresponding burger
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });