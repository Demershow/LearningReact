import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { init } from "./billingCycleActions";

import labelInput from "../common/form/labelInput";

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={labelInput}
            label="Nome"
            cols="12 4"
            placeholder="Informe o nome"
            readOnly={readOnly}
          />

          <Field
            name="month"
            component={labelInput}
            label="Mês"
            cols="12 4"
            placeholder="Informe o mês"
            readOnly={readOnly}
          />

          <Field
            name="year"
            component={labelInput}
            label="Ano"
            cols="12 4"
            placeholder="Informe o ano"
            readOnly={readOnly}
          />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button className="btn btn-default" type="button" onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({ form: "billingCycleForm", destroyOnUnmount: false })(BillingCycleForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm);
