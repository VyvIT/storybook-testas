const styles = () => ({
  root: {
    display: 'grid',
    gridTemplateAreas: `'header'
                        'content'`,
    gridTemplateRows: 'auto 1fr',
  },
  title: {
    backgroundColor: '#7b7f7b',
    borderRadius: '3px 3px 0 0',
  },
  content: {
    backgroundColor: '#ccc',
  },
  footer: {
    borderRadius: '0 0 3px 3px',
    backgroundColor: '#ccc',
    minHeight: '3px',
  }
});

export default styles;
