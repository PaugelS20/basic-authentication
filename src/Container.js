import React from 'react';

// children will be removed in the next major upadte of ant design neet to change to items somhow
const Container = ({ children }) => (
  <div style={styles.container}>
    { children }
  </div>
);

const styles = {
  container: {
    margin: '0 auto',
    padding: '50px 100px'
  }
}
export default Container;
