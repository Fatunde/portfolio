import React from 'react';

import {
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({prof}) => {
    return ( 
            <Card className="section-lg bg-gradient-info shadow-lg border-0">
                <Container className="">
                <div className="p-2">
                  <Row className="">
                  <Col className="order-lg-2" lg="4">
                      <img src={prof.avatar_url} style={{width: "200px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"/>
                    </Col>
                    <Col lg="8" className="order-lg-1">
                      <h2 className="text-white">
                        Reach Out to me!
                      </h2>
                      <p className="lead text-white mt-3">
                        DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
                      </p>

                <div className="row my-3 icon-shape bg-gradient-white shadow rounded text-info">
                  <div className="col-lg-5">
                    <i className="ni ni-pin-3 text-info" />
                    {prof.location} 21 Ila Orangun Street, Ketu,</div>
                  <div className="col-lg-3">
                    <i className="fa fa-phone mr-2" />
                    08065654671,</div>
                  <div className="col-lg-4">
                    <i className="fa fa-envelope-square mr-2" />
                    fatundedamilare@gmail.com</div>
                        </div>

                        <SocialLinks />
                    </Col>                    
                  </Row>
                </div>
                </Container>
              </Card>
     );
}
 
export default GithubProfileCard;