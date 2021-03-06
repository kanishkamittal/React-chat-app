const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
   // height: 'calc(100% - 35px)',
     height:'100%',
    position: 'absolute',
    left: '0',
    width: '300px',
    boxShadow: '0px 0px 2px black',
    '@media screen and (max-width: 1024px)': {
      width:'100%'
    }
  },
  listItem: {
    cursor: 'pointer'
  },
  newChatBtn: {
    borderRadius: '0px'
  },
  unreadMessage: {
    color: 'red',
    position: 'absolute',
    top: '0',
    right: '5px'
  },
  header:{
    background:'#075E54',
    padding:'25px'
  },
  menu:{
    position: 'absolute',
    top: '5px',
    right: '5px',
    cursor:'pointer',
    color:'white'
  },
  add:{
    color: 'white',
    marginTop: '10px',
    cursor: 'pointer',
    fontSize: '30px',
  },
  circle:{
    position: 'fixed',
    height: '50px',
    width: '50px',
    backgroundColor: '#128C7E',
    borderRadius: '50%',
    bottom: '50px',
   // left: '240px'
  right: 'calc(100% - 298px)',
  '@media screen and (max-width: 1024px)':{
    right:'2px'
  }
  },
  green: {
    color: '#fff',
    backgroundColor: '#4caf50'
  },
 
  searchIcon: {
    position: 'absolute',
    top: '30px',
    zIndex: '99',
    left: '190px',
    color: 'white'
  },
  inputRoot: {
    color: 'white',
    padding: '6px',
    border: 'none',
    fontSize: '17px',
    background: '#096A5F',
    borderRadius: '12px',
    width: '200px',
    height: '35px',
  },
});

export default styles;