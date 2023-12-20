import slider1 from '../../../public/banners/banner1.jpg'
import slider2 from '../../../public/banners/banner2.jpg'
import slider3 from '../../../public/banners/banner3.jpg'

const Slider = () => {
    return (
        
        <div id="carouselExample" className="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slider1} className="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={slider2} className="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={slider3} className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    )
}

export default Slider