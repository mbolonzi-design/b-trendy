import React from 'react'
import '../App.css'

function Home() {
  return (
    <div>
      <h3>New Arrivals</h3>
      <div className="new-arrivals">
        <div className='product-card'>
          <img src="/images/hoodie.jpg" alt="airs" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur provident debitis consectetur!.
          </p>
          <hr />
          <p>
            Price: Ksh 4,500
          </p>
        </div>
        <div className='product-card'>
          <img src="/images/air.jpg" alt="airs" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur provident debitis consectetur!.
          </p>
          <hr />
          <p>
            Price: Ksh 4,500
          </p>
        </div>
        <div className='product-card'>
          <img src="/images/jordans.jpg" alt="airs" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur provident debitis consectetur!.
          </p>
          <hr />
          <p>
            Price: Ksh 4,500
          </p>
        </div>
        <div className='product-card'>
          <img src="/images/alena.jpg" alt="airs" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur provident debitis consectetur!.
          </p>
          <hr />
          <p>
            Price: Ksh 4,500
          </p>
        </div>
        <div className='product-card'>
          <img src="/images/chloe.jpg" alt="airs" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur provident debitis consectetur!.
          </p>
          <hr />
          <p>
            Price: Ksh 4,500
          </p>
        </div>
        <div className='product-card'>
          <img src="/images/koppens.jpg" alt="airs" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur provident debitis consectetur!.
          </p>
          <hr />
          <p>
            Price: Ksh 4,500
          </p>
        </div>
      </div>

      <div className="women-section">
        <h3>Women Fashion</h3>
        <div className='women'>
          <div className='product-card'>
            <img src="/images/less.jpg" alt="airs" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur provident debitis consectetur!.
            </p>
            <hr />
            <p>
              Price: Ksh 4,500
            </p>
          </div>
          <div className='product-card'>
            <img src="/images/alena.jpg" alt="airs" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur provident debitis consectetur!.
            </p>
            <hr />
            <p>
              Price: Ksh 4,500
            </p>
          </div>
          <div className='product-card'>
            <img src="/images/maria.jpg" alt="airs" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur provident debitis consectetur!.
            </p>
            <hr />
            <p>
              Price: Ksh 4,500
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home