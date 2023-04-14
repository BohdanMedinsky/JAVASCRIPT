document.addEventListener("DOMContentLoaded", function() {
    
     const form = document.querySelector(".wrapper form");
    
                form.addEventListener("click", function(event) {
    
                    event.preventDefault();
    
                    let target = event.target;
    
                    if (target.closest(".book")) {
    
                        this.screen.value = target.dataset.name;
    
                    };
    
                    if (target.closest("#send")) {
    
                        buyerName.textContent = this.nam.value;
    
                        book.textContent = `${this.screen.value} в кількості ${this.quantity.value}шт.`;
    
                        date.textContent = this.deliveryDate.value;
    
                        buyerAddress.textContent = this.deliveryAddress.value;
    
                        field.classList.remove("invisible");
    
                    }
    
                });
   
            })
    