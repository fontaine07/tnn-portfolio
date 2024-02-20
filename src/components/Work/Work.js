import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import ProjectCard  from "./ProjectCard"
import projImg1 from "../../assets/images/ovw.png"
import projImg2 from "../../assets/images/tdfa.png"
import projImg3 from "../../assets/images/car-web.png"
import codeScreen from "../../assets/images/code-screen.jpg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Work.css"

const Work = () => {

  const projects = [
    {
      title: "Web fiction's promotion website",
      description: "UI Design",
      imgUrl: projImg1,
      pjUrl: "https://www.figma.com/file/30IqQCv5nJddMkxoqLaa8D/Untitled?type=design&node-id=0%3A1&mode=design&t=JPIKaBulT65dRsIk-1",
    },
    {
      title: "Overwatch's promotion website redesign",
      description: "UI Design",
      imgUrl: projImg2,
      pjUrl: "https://www.figma.com/file/Ghvs28zad9A0Q0AXI9opa4/Untitled?type=design&node-id=0%3A1&mode=design&t=qtUjlknjC7O9WFPt-1",
    },
    {
      title: "Selling site for cars",
      description: "UI Design & Frontend Development",
      imgUrl: projImg3,
      pjUrl: "https://github.com/How2quamon/CTQM-CAR-FE",
    },
  ];

  return (
    <section className="project-section" id="my-work">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <div class="project-header">
                  <h1>My Works</h1>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2D Art</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Short Stories</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Work