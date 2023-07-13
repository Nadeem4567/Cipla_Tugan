document.querySelectorAll('.add_to_cart_button').forEach((button) => {
    button.addEventListener('click', () => {
      let product_id = button.dataset.productId;
      let product_title = button.dataset.productTitle;

      button.innerHTML = `Adding To Cart..`;
      button.style.color = `cyan`;
      button.style.fontWeight = `800`;
      fetch("/cart/add.js", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id : +product_id, quantity: 1}),
        })
            .then((data) => {
              console.log("added product to cart");
              location.reload();
            })
            .catch((error) => {
                console.log("failed to add product");
            });
    });
  });