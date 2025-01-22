import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <MDBFooter className='text-center' color='white' bgColor='black'>
      <MDBContainer className='p-4'>
        {/* <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section> */}

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4'  />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Submit
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
         
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Patient Care</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Find A Doctor
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Medical Services
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Patient Testimonials
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Value Added Services
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Pay Online
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Apolo Surgery
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Centres Of Excellence</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Orthopaedics
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Nephrology & Urology
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Bariatric Surgery
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Cardiology
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Pulmonology
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Gastrornterlogy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Spine Surgery
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Oncology
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Neurology & Neurosurgery
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Organ Transplantation
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Preventive Health Check Up
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Apollo ProHealth
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Emergency Care
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Ear,Nose and Throat
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Vasular Surgery
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Pediatrics
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Dermatology
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Blogs</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Health Library
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Covid 19 Updates
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Covid 19 FAQ's
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    COVID-19 Vaccination
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    COVID-19 New Symptoms
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Hospitals</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Hospitals In India
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    International Hospitals
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Apollo Clinincs
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Reach Hospitals
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Apollo Cradle
                  </a>
                </li>

                <li>
                  <a href='#!' className='text-white'>
                  Apollo Fertility
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Apollo Cancer Centers
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Apollo Proton Centers
                  </a>
                </li>


              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
      <div className='container'>
        <div>Apollo's HealthCare @ your Fignger tips</div>
        <img src='images/Footer/img1.png'></img>
        <img src='images/Footer/img2.png'></img>

        
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright Apollo Hospitals Group. All rights Reserved :
        
      </div>
    </MDBFooter>
  )
}

export default Footer