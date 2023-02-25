import ApiPath from "../Apipath";


class CrudService {
    async selectData() {
        try {
            const response = await fetch(ApiPath.FirebaseApi);
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.log(error);
        }
    }
    updateData() { }
    deleteData() { }
    insertData() {
        
     }
}
var crudService = new CrudService();
export default crudService;