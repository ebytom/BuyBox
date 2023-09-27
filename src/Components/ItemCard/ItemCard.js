import React from 'react'

const ItemCard = () => {
    return (
        <figure class="card card-product-grid card-lg"> <a href="#" class="img-wrap" data-abc="true"> <img class="rounded-4" src="https://i.imgur.com/MPqUt62.jpg" /> </a>
            <figcaption class="info-wrap">
                <div class="row">
                    <div class="col-md-9 col-xs-9"> <a href="#" class="title" data-abc="true"><b>Dell Xtreme 270</b></a> <span class="rated text-secondary">Laptops</span> </div>
                    <div class="col-md-3 col-xs-3">
                        <div class="rating text-right"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <span class="rated text-secondary fw-bold">Rated 4.0/5</span> </div>
                    </div>
                </div>
            </figcaption>
            <div class="bottom-wrap-payment">
                <div class="d-flex p-3 py-2 align-items-center justify-content-between">
                    <div class="text-white"><div><b>Rs 3,999</b></div><span class="rated text-secondary">VISA Platinum</span> </div>
                    <div class="btn btn-primary rounded-4">Buy Now</div>
                </div>
            </div>
        </figure>
    )
}

export default ItemCard