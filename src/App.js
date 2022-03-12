import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="mainbody bg-light">
        <div className="container-fluid maincontainer1 px-0 ">
          <div className="row mainrow1 px-4">
            <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
                <div className="item1">
                  <img
                    class="image1"
                    src="https://th.bing.com/th/id/OIP.Jqd_GRyRRKBS9lsQ5Fb5iwHaHx?pid=ImgDet&rs=1"
                  />
                  <a class=" ms-1 levyna" href="#">
                    Levyna
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div class="item2">
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                          About
                        </a>
                      </li>
                      <li class="nav-item ms-3">
                        <a class="nav-link" href="#">
                          Interior
                        </a>
                      </li>
                      <li class="nav-item ms-3">
                        <a class="nav-link" href="#">
                          Contact
                        </a>
                      </li>
                      <li class="nav-item ms-3 ">
                        <a class="nav-link" href="#">
                          Testimonial
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="item3">
                  <img
                    class="image2"
                    src="https://s3.amazonaws.com/freebiesupply/large/2x/facebook-logo-circle-white.png"
                  />
                  <img
                    class="image3 ms-3"
                    src="https://s3.amazonaws.com/freebiesupply/large/2x/instagram-icon-white-on-black-circle.png"
                  />
                  <a
                    class="btn button1 rounded-pill ms-3 px-3 "
                    role="button"
                    href=""
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div class="row mainrow2 px-5">
            <div class="col-6 col1">
              <h1 class="heading1">We will help you in finding </h1>
              <h1 class="heading1">
                complementary
                <span class="change-text"> interiors</span>
              </h1>
              <h1 class="heading1">for your home </h1>
            </div>
            <div class="col-6 col2">
              <p>
                We are <strong>interiour</strong> makers overselfs so it will be
                very easy for
              </p>
              <p class="textmargin">
                us to realize your <strong>dream interiour</strong>, and also
                our prices are
              </p>
              <p class="textmargin">
                quite competetive with the market so it
                <strong>not burden you</strong>
              </p>
              <br></br>
              <p class="textmargin">
                <strong class="textbold">See our interiour </strong>
                <img
                  class=" image4"
                  src="https://th.bing.com/th/id/R.8585c0074c0c1181d25754990d86c3ce?rik=MahsJoGA%2fEc05A&riu=http%3a%2f%2fwww.neurobs.com%2fpres_docs%2fimages%2farrow.jpg&ehk=PtCZ0ot%2bkKvacTB0BLX6rd8TYfQFwJRFCtFYzi%2bl5rA%3d&risl=&pid=ImgRaw&r=0"
                />
              </p>
            </div>
          </div>
          <div class="row d-flex mainrow3  px-5">
            <div class="item4 d-flex">
              <h6>Our Newest Interior</h6>
              <div class="item5 d-flex ms-auto">
                <div class="circle"></div>
                <div class="circle ms-2"></div>
                <div class="circle3 ms-2"></div>
                <div class="circle ms-2"></div>
                <div class="circle ms-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid maincontainer2 px-0 ">
          <div class=" row imagecontainer px-5 d-flex">
            <div class="col-12 col-md-4 imagecont1">
              <img
                class="images"
                src="https://th.bing.com/th/id/R.a21261ddbf45752994aeaed8805a62a0?rik=a1DsI3839cSKCg&riu=http%3a%2f%2fwww.interiorsbysteveng.com%2fwp-content%2fuploads%2f2016%2f09%2f4201-living_new-2.jpg&ehk=BOTlMrjFDrSseOm7trNa2SXS56a5UPLOLt9%2fujYanCM%3d&risl=&pid=ImgRaw&r=0"
              />
            </div>
            <div class=" col-12 p-0 col-md-4 imagecont1">
              <img
                class=" ms-2 images"
                src="https://th.bing.com/th/id/R.da65ce4bd57a20e0f5eaaea1b3c7177c?rik=s0U5smRrQB%2bNVg&riu=http%3a%2f%2froohome.com%2fwp-content%2fuploads%2f2016%2f07%2fmodern-house-interior-design.jpg&ehk=PYG2uOiiTfPVQWMHqyKnoVybwW35e77WykWgdABmU2I%3d&risl=&pid=ImgRaw&r=0"
              />
            </div>
            <div class="col-12 col-md-4 imagecont1">
              <img
                class="ms-2 images"
                src="https://th.bing.com/th/id/OIP.nh9uSO_stMiJQwNfQ9OcpAHaLH?pid=ImgDet&w=800&h=1200&rs=1"
              />
            </div>
          </div>
          <div class="row mainrow4 px-5">
            <div class="conts d-flex">
              <div class="c1 ">
                <h2 class="uber">Uber</h2>
              </div>
              <div class="c2 d-flex ms-4">
                <h3 class="launch">LaunchDarkly</h3>
                <img
                  class="launchimage ms-2"
                  src="https://yt3.ggpht.com/a/AATXAJwdXeAg6bKcEnFZVhXY8EplFIAY5d9vWphVlw=s900-c-k-c0xffffffff-no-rj-mo"
                />
              </div>
              <div class="c3  d-flex ms-4">
                <img
                  class="intercomimage"
                  src="https://www.custify.com/blog/wp-content/uploads/2021/01/Intercom-logo-sq-black-trans.png"
                />
                <h5 class="intercom ms-2">INTERCOM</h5>
              </div>
              <div class="c4 d-flex ms-4">
                <img
                  class="squareimage"
                  src="https://logos-world.net/wp-content/uploads/2021/02/Squarespace-Emblem.png"
                />
                <h5 class="square">SQUARESPACE</h5>
              </div>
              <div class="c5 d-flex ms-4">
                <img
                  class="harshiimage"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HashiCorp_Logo_no_text.png/1200px-HashiCorp_Logo_no_text.png"
                />
                <h5 class="harshi">HarshiCrop</h5>
              </div>
            </div>
          </div>
          <div class=" row mainrow5 px-5">
            <div class="col-5 col3">
              <img
                class="mainrow5image"
                src="https://virtuallystagingproperties.com/wp-content/uploads/2019/01/virtuallystagingproperties_StylestoAvoid1.jpg"
              />
            </div>
            <div class="col-6 col4 ms-4">
              <h1 class="heading1">
                The <span class="change-text2"> best interiour </span>
                comes
              </h1>
              <h1 class="heading1">from Levyna</h1>
              <div class="peratext">
                <p class="col4p">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <p class="col4p">
                  industry. Lorem ipsum has been the industry's standard dummy
                  text
                </p>
                <p class="col4p">
                  ever since the 1500s, when an unknown printer took a galley of
                  type
                </p>
                <p class="col4p">
                  and scrambled it to make a type specimen book.
                </p>
              </div>
              <a class="btn button2 " role="button" href="">
                See our interior
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
