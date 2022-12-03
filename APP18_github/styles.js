import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },

  image: {
    margin: 20,
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },

  input:{
    width: 250,
    height: 42,
    borderWidth: 1,
    borderColor: '#00416b',
    fontSize: 16,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },

  result:{
    fontSize: 18,
    fontWeight: '600',
    flexDirection: 'row',
    color: 'white',
    margin: 10,
  },

  title:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },

  user:{
    textAlign: 'center',
    fontSize: 18,
    color: '#bebebe',
    marginBottom: 10,
  },

  button: {
    width: 250,
    height: 36,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'blue',
    margin: 10,
  },

  textButton: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: 'white'
  },
});

export {styles}
 