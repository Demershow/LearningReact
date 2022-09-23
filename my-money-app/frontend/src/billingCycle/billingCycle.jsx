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
import { create, update, remove, init} from "./billingCycleActions";
import List from "./billingCycleList";
import Form from "./BillingCycleForm";

class BillingCycle extends Component {
  componentWillMount() {
    this.props.init();
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
                readOnly={true}
              ></TabHeader>
            </TabsHeader>
            <TabContents>
              <TabContent id="tabList">
                <List />
              </TabContent>
              <TabContent id="tabCreate">
                <Form onSubmit={this.props.create} submitLabel='incluir' submitClass='primary'/>
              </TabContent>
              <TabContent id="tabUpdate">
                <Form onSubmit={this.props.update} submitLabel='alterar' submitClass='info'/>
              </TabContent>
              <TabContent id="tabDelete">
              <Form onSubmit={this.props.remove} submitLabel='excluir' submitClass='danger'/>
              </TabContent>
            </TabContents>
          </Tabs>
        </Content>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ init, selectTab, showTabs, create, update, remove }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle);
