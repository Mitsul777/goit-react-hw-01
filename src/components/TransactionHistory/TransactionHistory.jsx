import css from "./TransactionHistory.module.css"
const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead className={css.thead}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            <tbody className={css.tbody}>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id} className={css.tr}>
                    <td className={css.tbodytd}>{type}</td>
                    <td className={css.tbodytd}>{amount}</td>
                    <td className={css.tbodytd}>{currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory