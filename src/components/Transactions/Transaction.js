import PropTypes from 'prop-types';
import { TableTitle, Table, TableHead, TableMain } from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableTitle>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </TableTitle>
      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <TableMain>{item.type}</TableMain>
              <TableMain>{item.amount}</TableMain>
              <TableMain>{item.currency}</TableMain>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};