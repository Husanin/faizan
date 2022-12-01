import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function For() {

    function buttonHandle(e){
        e.preventDefault();
        
    }
  return (
    
    <Form>
          <Form.Group className="mx-5 my-4" controlId="formBasicEmail">
        <Form.Label>Fullname</Form.Label>
        <Form.Control type="text" placeholder="Enter Fullname" />
      </Form.Group>

      <Form.Group className="mx-5 my-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mx-5 my-4" controlId="formBasicPassword">
        <Form.Label>Contact</Form.Label>
        <Form.Control type="nomber" placeholder="Enter Nomber" />
      </Form.Group>
      <Form.Group className="mx-5 my-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" className="mx-5 my-3" onClick={buttonHandle} type="submit">
        Submit
      </Button>
    </Form>
    
  
  );
} 

export default For;