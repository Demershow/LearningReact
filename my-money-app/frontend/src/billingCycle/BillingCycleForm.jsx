import React, { Component } from "react";


class BillingCycleForm extends Component {
  render() {
    return (
      <div>
        <form role="form">
          <div className="box-body">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" className="form-control" id="name" placeholder="Informe o nome" />
            </div>
            <div className="form-group">
              <label htmlFor="month">Mês</label>
              <input type="number" className="form-control" id="month" placeholder="Informe o mês" />
            </div>
            <div className="form-group">
              <label htmlFor="year">Ano</label>
              <input type="number" className="form-control" id="year" placeholder="Informe o ano" />
            </div>
          </div>
          <div className="box-footer">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default BillingCycleForm;
