import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Bg() {
    return (
<>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.google.com/search?q=sabaragamuwa+university&rlz=1C1ZKTG_enLK842LK842
      &source=lnms&tbm=isch&sa=X&ved=2ahUKEwjBvc-hntPqAhUSWCsKHYdjC7oQ_AUoAXoECBkQAw#imgrc=ZeHB_Cp9IHGvEM"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.google.com/search?q=sabaragamuwa+university
      &rlz=1C1ZKTG_enLK842LK842&source=lnms&tbm=isch&sa=X
      &ved=2ahUKEwjBvc-hntPqAhUSWCsKHYdjC7oQ_AUoAXoECBkQAw#imgrc=Ll2K_0ZZPTzexM"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.google.com/search?q=sabaragamuwa+university&rlz=1C1ZKTG_enLK842LK842
      &source=lnms&tbm=isch&sa=X&ved=2ahUKEwjBvc-hntPqAhUSWCsKHYdjC7oQ_AUoAXoECBkQAw#imgrc=hFpof_rB5lbxsM"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <img
      className="d-block w-100"
      src="https://www.google.com/search?q=sabaragamuwa+university&rlz=1C1ZKTG_enLK842LK842
      &source=lnms&tbm=isch&sa=X&ved=2ahUKEwjBvc-hntPqAhUSWCsKHYdjC7oQ_AUoAXoECBkQAw#imgrc=hFpof_rB5lbxsM"
      alt="Third slide"
    />
</Carousel>
</>
    );
}
export default Bg;