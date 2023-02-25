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
    async insertData(values) {

        await fetch(ApiPath.FirebaseApi, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
}
var crudService = new CrudService();
export default crudService;