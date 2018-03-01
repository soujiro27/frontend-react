import axios from 'axios'

class Loads {

    load_header_data(){
        return axios.get('Api/headerData')
    }
    
    load_table_data(){
        return axios.get('Acciones/Registers')
    }
}

export default Loads;