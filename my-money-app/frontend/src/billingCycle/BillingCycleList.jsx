import React, {Component} from "react";



class BillingCycleList extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salário</td>
              <td>01</td>
              <td>2019</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default BillingCycleList;