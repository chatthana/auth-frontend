import React, { useEffect } from 'react';
import MainLayout from '../../components/layouts/main';
import Strip from '../../components/strip';
import Styles from './styles';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

import { signin } from '../../redux/auth/actions';
import { useDispatch } from 'react-redux';

export default () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signin({ email: '', password: '' }));
  }, []);

  return (
    <MainLayout>
      <Styles>
        <article>
          <div className="login-box">
            <Row>
              <Col>
                <Card>
                  <Strip />
                  <Card.Body>
                    <div className="title-section">
                      <h4 className="card-title text-center">Signin</h4>
                    </div>
                    <div className="form-section">
                      <div className="form">
                        <Form autoComplete="off">
                          <Form.Group>
                            <Form.Control type="text" name="email" placeholder="Email" />
                          </Form.Group>
                          <Form.Group>
                            <Form.Control type="password" name="password" placeholder="Password" />
                          </Form.Group>
                          <div className="button-wrapper">
                            <Button variant="custom" block>Sign in</Button>
                          </div>
                        </Form>
                      </div>
                    </div>
                    <div className="footer-section">
                      <p className="powered-by text-center">Powered by DominantEngine</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </article>
      </Styles>
    </MainLayout>
  )
}