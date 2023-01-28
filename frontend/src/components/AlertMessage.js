import { Alert } from 'react-bootstrap';

const AlertMessage = ({ alertState }) => {
  return (
    <Alert show={true} variant={alertState.variant}>
      <Alert.Heading>{alertState.header}</Alert.Heading>
      <div>{alertState.message}</div>
    </Alert>
  );
};

export default AlertMessage;
