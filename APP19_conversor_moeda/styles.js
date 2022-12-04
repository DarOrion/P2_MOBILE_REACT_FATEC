import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
    image:{
    width: 200, 
    height: 200,
    margin: 20,
  },
  
    input:{
    width: 250,
    height: 42,
    borderWidth: 3,
    borderColor: 'blue',
    fontSize: 16,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 10,
  },
  
  text:{
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    color: 'blue',
  },

  subTitle: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '200',
  },

  button: {
   width: 250,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
    margin: 10,
  },

  textButton: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});

export {styles}
 