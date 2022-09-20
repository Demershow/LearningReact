import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/ValueBox";
import Row from "../common/layout/Row";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value="R$ 10,00"
              text="Total de créditos"
            ></ValueBox>
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value="R$ 5,00"
              text="Total de débitos"
            ></ValueBox>
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              value="R$ 5,00"
              text="Total de consolidado"
            ></ValueBox>
          </Row>
        </Content>
      </div>
    );
  }
}

export default Dashboard;
