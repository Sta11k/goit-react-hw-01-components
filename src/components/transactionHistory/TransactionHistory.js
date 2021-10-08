import './TransactionHistory.css';
import transactions from './transactions.json';

export default function TransactionHistory(props) {
  //  const { id, label, percentage } = props;
  //   const { id, type, amount, currency } = props;
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
        {transactions.map(el => (
          <tr key={el.id}>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
    // <div className="TransactionHistory">
    //   <ul className="friend-list">
    //     {friends.map(el => (
    // <tr>
    //   <td>Withdrawal</td>
    //   <td>85</td>
    //   <td>USD</td>
    // </tr>
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
