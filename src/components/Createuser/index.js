import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Index() {
  // const navigate = useNavigate();
  const [data, setData] = useState({});
  const [form, setForm] = useState([]);

  const handle = () => {
    setForm([...form, data]);
    console.log(form)
    const existingData = localStorage.getItem('data');
    const parsedData = existingData ? JSON.parse(existingData) : [];
    const updatedData = [...parsedData, data];
    localStorage.setItem('data', JSON.stringify(updatedData));
  }
  return (
    <>
      <Container>
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            <div className=" ">
              <div className="form-container">
                <h4>Add Employee</h4>
                <form className="border-0 mt-4">
                  <div className="form-group">
                    <label>First Name</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control form-height"
                        aria-label="E-mail Address"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setData({ ...data, firstname: e.target.value })}
                      />
                    </div>
                    <label>Last Name</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control form-height"
                        aria-label="E-mail Address"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setData({ ...data, Lastname: e.target.value })}
                      />
                    </div>
                    <label>Email</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control form-height"
                        aria-label="E-mail Address"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setData({ ...data, Email: e.target.value })}
                      // required
                      />
                    </div>
                    <label>Salary($)</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"

                        className="form-control form-height"
                        aria-label="E-mail Address"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setData({ ...data, Salary: e.target.value })}
                      // required
                      />
                    </div>
                    <label>Date</label>
                    <div className="input-group mb-3">
                      <input
                        placeholder="DD/MM/YYYY"
                        type="Text"
                        className="form-control form-height"
                        aria-label="E-mail Address"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setData({ ...data, Date: e.target.value })}
                      // required
                      />
                    </div>
                  </div>
                  <Button
                    type="submit" variant="primary" onClick={handle}>
                    <Link to="/Tables" className="text-white text-decoration-none">   Add</Link>
                  </Button>{" "}
                  <Button
                    type="reset"
                    variant="light"
                  >
                    <Link to="/Tables" className="text-decoration-none  ">Cancel</Link>
                  </Button>{" "}
                </form>
              </div>
            </div>
          </Col>
          <Col xs={2} />
        </Row>
      </Container>
    </>
  );
}

export default Index;