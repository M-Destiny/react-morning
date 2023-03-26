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


    // TODO: add a function to update the data in existing row
    // TODO: add a feild to add the data in existing row
    // add a function to update the data in existing row
    async updateData(values) {
        // add code to update the data
        await fetch(ApiPath.FirebaseApi, {
            method: 'PUT',
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
            }
            );


    }
    // TODO: add a function to delete the data in existing row 
    // TODO: add a button to delete the data in existing row
    // add a function to delete the data in existing row
    async deleteData(values) {
        await fetch(ApiPath.FirebaseApi, {
            method: 'DELETE',
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