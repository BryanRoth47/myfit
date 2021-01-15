import { Auth } from 'aws-amplify';

const baseUrl = "https://60iw3lcpqc.execute-api.us-east-2.amazonaws.com/testGet/id";

const getUserId = async (callback) => {
    let user;
    try {
        user = await Auth.currentAuthenticatedUser();
    } catch(err) {
        user = null;
    }
    if (user) callback(user.attributes.sub);
}

const getUsername = async (callback) => {
    let user;
    try {
        user = await Auth.currentAuthenticatedUser();
    } catch(err) {
        user = null;
    }
    if (user){
        //console.log(user.username)
        callback(user.username);
    } 
}

function stringToBinary(input) {
    var characters = input.split('');
  
    return characters.map(function(char) {
      const binary = char.charCodeAt(0).toString(2)
      const pad = Math.max(8 - binary.length, 0);
      // Just to make sure it is 8 bits long.
      return '0'.repeat(pad) + binary;
    }).join('');
  }
  
  function binaryToString(input) {
    let bytesLeft = input;
    let result = '';
  
    // Check if we have some bytes left
    while (bytesLeft.length) {
      // Get the first digits
      const byte = bytesLeft.substr(0, 8);
      bytesLeft = bytesLeft.substr(8);
  
      result += String.fromCharCode(parseInt(byte, 2));
    }
    return result;
  }

const savePlan = async (plan) => {
    const user = await Auth.currentAuthenticatedUser();
    const splan = stringToBinary(JSON.stringify(plan));
    if (user) {
        const userId = user.attributes.sub;
        const response = await fetch (`${baseUrl}/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                comment: splan
            })
        });
        const result = await response.json();
        return result;
    }
    return false;
}

const getPlan = async () => {
    const user = await Auth.currentAuthenticatedUser();
    if (user) {
        const userId = user.attributes.sub;
        const response = await fetch (`${baseUrl}/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        //console.log(result)
        let plan = result.Items[0].comment.S;
        plan = binaryToString(plan);
        return JSON.parse(plan);
    }
    return false;
}

export { getUserId, getUsername, savePlan, getPlan };

// { 
//     "TableName": "users",
//     "Item": {
//     	"id": {
//             "S": "$input.params('id')"
//         },
//         "username": {
//             "S": "$input.path('$.username')"
//         },
//         "comment": { 
//             "S": "$input.json('$')"
//         }
//     }
// }
