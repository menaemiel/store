import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <Row>
      <Col md="9">
        <h2>
          <Translate contentKey="home.title">Welcome, RedHat Demo Application!</Translate>
        </h2>
        <p className="lead">
          <Translate contentKey="home.subtitle">This is your homepage</Translate>
        </p>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div>
            <Alert color="warning">
              <Translate contentKey="global.messages.info.authenticated.prefix">If you want to </Translate>
              <Link to="/login" className="alert-link">
                <Translate contentKey="global.messages.info.authenticated.link"> sign in</Translate>
              </Link>
              <Translate contentKey="global.messages.info.authenticated.suffix">
                , you can try the default accounts:
                <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;)
                <br />- User (login=&quot;user&quot; and password=&quot;user&quot;).
              </Translate>
            </Alert>

            <Alert color="warning">
              <Translate contentKey="global.messages.info.register.noaccount">You do not have an account yet?</Translate>&nbsp;
              <Link to="/account/register" className="alert-link">
                <Translate contentKey="global.messages.info.register.link">Register a new account</Translate>
              </Link>
            </Alert>
          </div>
        )}
        <p>
          <Translate contentKey="home.question">If you have any question about RedHat:</Translate>
        </p>

        <ul>
          <li>
            <a href="https://www.redhat.com/en" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.homepage">RedHat homepage</Translate>
            </a>
          </li>
          <li>
            <a href="https://docs.openshift.com/container-platform/4.9/welcome/index.html" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.stackoverflow">Red Hat Openshift Product documentation</Translate>
            </a>
          </li>
          <li>
            <a href="https://docs.openshift.com/container-platform/4.9/service_mesh/v2x/ossm-about.html" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.bugtracker">Red Hat Openshift Service Mesh</Translate>
            </a>
          </li>
          <li>
            <a href="https://developers.redhat.com/products/codeready-containers/overview" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.chat">To run Red Hat Openshift platform laptop</Translate>
            </a>
          </li>
          <li>
            <a href="https://developers.redhat.com/learn/openshift" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.follow">Go through Openshift interactive learning portal</Translate>
            </a>
          </li>
        </ul>

        <p>
          <Translate contentKey="home.like">If you like JHipster, do not forget to give us a star on</Translate>{' '}
          <a href="https://github.com/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          !
        </p>
      </Col>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
