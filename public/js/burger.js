$(function() {
    $(".devour-btn").on("click", function(event) {
      var id = $(this).data("id");
  
      var devourState = {
        devoured: true
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourState
      }).then(
        function() {
          location.reload();
        }
      );
    });

    $(".order-form").on('submit', function(event) {
        event.preventDefault();
    
        let newBurger;
    
        if ($('#burger-input').val()) {
          newBurger = {
            burger_name: $("#burger-input").val().trim(),
            devoured: 0
          };
        }
    
        $.ajax('/api/burgers', {
          type: "POST",
          data: newBurger
        }).then(() => {
          location.reload();
        });
      });
    });