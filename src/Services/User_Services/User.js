async function RegesterUser(user){
    try {
       const response = await fetch('http://localhost:8080/api/v1/user/create', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(user),
       });
       return response.json();
    } catch (error) {
       console.error('Error:', error);
       return { error: 'Something went wrong!' };
       
    }
   }
   
async function loginUser(user){
    try {
       const response = await fetch('http://localhost:8080/api/v1/user/login', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           credentials: 'include',
           body: JSON.stringify(user),
       });
       
       
       
       return response.json();
    } catch (error) {
       console.error('Error:', error);
       return { error: 'Something went wrong!' };
    }

}

async function logoutUser(){
    try {
       const response = await fetch('http://localhost:8080/api/v1/user/logout', {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json',
           },
           credentials: 'include',
       });
       return response.json();
    } catch (error) {
       console.error('Error:', error);
       return { error: 'Something went wrong!' };
    }}
   

    async function isLoggin(){
        try {
           const response = await fetch('http://localhost:8080/api/v1/user/islogin', {
               method: 'GET',
               headers: {
                   'Content-Type': 'application/json',
               },
               credentials: 'include',
           });
           return response.json();
        } catch (error) {
           console.error('Error:', error);
           return { error: 'Something went wrong!' };
        }
    }
   export { RegesterUser,loginUser,logoutUser,isLoggin}