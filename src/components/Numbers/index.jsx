import React from 'react'

const Numbers = () => {
    return (
      <div className="numbers section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <h3>
                  <span className="nbr custom-font">352</span>
                </h3>
                <h6>Projects Completed</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <h3>
                  <span className="nbr custom-font">567</span>
                </h3>
                <h6>Satisfied Clients</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <h3>
                  <span className="nbr custom-font">656</span>
                  <i>M</i>
                </h3>
                <h6>Monthly Revenue</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <h3>
                  <span className="nbr custom-font">17</span>
                </h3>
                <h6>Awards Won</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Numbers