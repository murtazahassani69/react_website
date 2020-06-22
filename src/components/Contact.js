import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import './contact.css'
class Contact extends Component {
  render() {
    return (
      <div  className="mycontacthome">
      <MDBContainer>
        <MDBRow>
          <MDBCol className="mysec" md="4">
            <form>
              <p className="h3 text-center">Feedback</p>
              <label htmlFor="defaultFormContactNameEx" className="black-text">
                Your name
              </label>
              <input
                type="text"
                id="defaultFormContactNameEx"
                className="form-control"
             required />
              <br />
              <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormContactEmailEx"
                className="form-control" required
              />
            
              <br />
              <label
                htmlFor="defaultFormContactMessageEx"
                className="grey-text"
              >
                Your message
              </label>
              <textarea
                type="text"
                id="defaultFormContactMessageEx"
                className="form-control"
                rows="3"
                required
              />
              <div col-md-4 className="text-center mt-4">
                <MDBBtn className="btn btn-success" outline required type="submit">
                  Submit
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
         
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    );
  }
}

export default Contact;
