import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    width: 250, 
    height: 250,
  },

  input:{
    width: 250,
    height: 50,
    borderWidth: 3,
    borderColor: '#00416b',
    fontSize: 16,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    fontWeight: 'bold',
    fontStyle: 'italic' ,
  },

  result:{
    fontSize: 18,
    fontWeight: '600',
    flexDirection: 'row',
    color: 'black',
    margin: 10,
  },

  title:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    color: 'blue',
  },

  button: {
    width: 80,
    height: 36,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'blue',
    margin: 10,
    
  },

  textButton: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: 'white' ,
    fontWeight: 'bold' ,
  },
});

export {styles}
 