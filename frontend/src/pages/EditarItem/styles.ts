import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  backgroundAvaliacao: {
    paddingBottom: '5%',
    borderRadius: '12px',
    marginBottom: '10%',
    marginTop: '3%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#D6F0C8',
    border: '6px solid #175215',
  },

  titleEditarSecao: {
    textAlign: 'center',
    marginTop: '1%',
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
    color: '#175215',
    fontSize: '35px',
  },

  gridButton: {
    display: 'flex',
    marginTop: '2%',
    marginLeft: '3.8%',
    marginRight: '2%',
    marginBottom: '2%',
  },

  designButton: {
    display: 'flex',
    marginLeft: '1%',
    marginRight: '1%',
    backgroundColor: '#2b7b24',
    width: '100px',
    borderRadius: '12px',
  },

  gridTable: {
    display: 'flex',
    marginTop: '2%',
    marginLeft: '3.8%',
    marginRight: '2%',
  },
}))
