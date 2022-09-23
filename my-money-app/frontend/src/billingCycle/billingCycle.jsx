import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/TabsHeader";
import TabContents from "../common/tab/TabContents";
import TabHeader from "../common/tab/TabHeader";
import TabContent from "../common/tab/TabContent";
import { selectTab, showTabs } from "../common/tab/tabActions";
import List from "./billingCycleList";
import Form from "./BillingCycleForm";

class BillingCycle extends Component {
  componentWillMount() {
    this.props.selectTab("tabList");
    this.props.showTabs("tabList", "tabCreate");
  }

  render() {
    return (
      <div>
        <ContentHeader titlte="Ciclos de pagamentos" small="cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader
                label="listar"
                icon="bars"
                target="tabList"
              ></TabHeader>
              <TabHeader
                label="incluir"
                icon="plus"
                target="tabCreate"
              ></TabHeader>
              <TabHeader
                label="alterar"
                icon="pencil"
                target="tabUpdate"
              ></TabHeader>
              <TabHeader
                label="excluir"
                icon="trash-o"
                target="tabDelete"
              ></TabHeader>
            </TabsHeader>
            <TabContents>
              <TabContent id="tabList">
                <List />
              </TabContent>
              <TabContent id="tabCreate">
              <Form onSubmit={this.props.create} />
              </TabContent>
              <TabContent id="tabUpdate">
                <h1>Alterar</h1>
              </TabContent>
              <TabContent id="tabDelete">
                <h1>Excluir</h1>
              </TabContent>
            </TabContents>
          </Tabs>
        </Content>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectTab, showTabs }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle);
