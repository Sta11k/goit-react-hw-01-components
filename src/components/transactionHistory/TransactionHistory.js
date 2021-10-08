import './TransactionHistory.css';
// import transactions from './transactions.json';

export default function TransactionHistory(props) {
  //  const { id, label, percentage } = props;

  return (
    <table className="transaction-history">
      <thead className="thead-history">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="tbodyh-history">
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
    // <div className="TransactionHistory">
    //   <ul className="friend-list">
    //     {friends.map(el => (
    //       <li className="friend-item" key={el.id}>
    //         {el.isOnline === true ? (
    //           <span className="statusOn">&#x263A;</span>
    //         ) : (
    //           <span className="statusOf">&#x263A;</span>
    //         )}

    //         <img className="avatar" src={el.avatar} alt="avatar" width="48" />
    //         <p className="name">{el.name}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}
