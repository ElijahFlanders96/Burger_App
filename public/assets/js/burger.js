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
    
        if ($('textarea').val()) {
          newBurger = {
            burger_name: $("textarea").val().trim(),
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