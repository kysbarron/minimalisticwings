$(document).ready(function(){
    
    $.ajax({
        type: 'GET',
        url: ' http://www.redbullshopus.com/products.json',
        success: function(response) {
            console.log(response);
            for(var i = 0; i < response.products.length; i++){
           
           
                $(".products").append(
                "<div class='box'>" +
                "<div class='title'>" + response.products[i].title+ "</div>" +
                "<div class ='image'><img src=' " + response.products[i].images[0].src + "'></div>" +
                "<div class='price'>$"+response.products[i].variants[0].price+"</div>"+
                "<div class ='description'>" + response.products[i].body_html + "</div>" +
                "</div>"
                )    
            }
        }

    })
});
