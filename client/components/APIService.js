const ROOT_URL = 'http://10.10.22.64:3001' | 'http://10.10.22.63:3001';

/* ACTIONS */

export async function postAction (action, token) {
  try {
    const resp = await fetch((ROOT_URL + '/action'), {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type":"application/json"
        },
        body: JSON.stringify(action)
      });

      const data = await resp.json();
      // if (data.message.includes('Action succesfully saved')) Alert.alert("Chore succesfully added!");
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getActions (token) {
  try {
    const resp = await fetch((ROOT_URL + '/actions'), {
      headers: {
        "Authorization": `Bearer ${token}`
    }});

    let actions = await response.json();
    actions = JSON.parse(actions.message);
    return actions;
    
    actions = actions.filter(action => group._id === action.group);
    //PROBABLY RETURN actions ????

  } catch (err) {
    throw new Error(err.message);
  }
}


/* LOGIN */

export async function getLogin (creds) {
  try {
    const resp = await fetch((ROOT_URL + '/login'), {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(creds)
    }).then((resp)=> resp.json())

    if (!response.ok) {
      throw new Error('Failed to get token');
    }
    return resp
    // const data = await resp.json();
   

  } catch (err) {
    throw new Error(err.message);
  }
}

/* USER */

export async function postUser (user) {
  try {
    const resp = await fetch((ROOT_URL + '/user'), {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(user)
    });

    const data = await resp.json();
    return data;

  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getUsers (token) {
  try {
    const resp = await fetch((ROOT_URL + '/users'), {
      headers: {
        "Authorization": `Bearer ${token}`
    }});

    let usersData = await response.json();
    usersData = JSON.parse(usersData.message);
    return usersData;

    usersData = usersData.filter(user => group.members.includes(user._id));
    //PROBABLY RETURN usersData ????

  } catch (err) {
    throw new Error(err.message);
  }
}

/* CHORES */

export async function getChores (token) {
  try {
    const response = await fetch(ROOT_URL + "/chores", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());


    if (!response.ok) {
      throw new Error('Failed to get chores');
    }


    // let chores = await response.json();
   return JSON.parse(response.message)  // check if it works!
    // return chores;

  } catch (err) {
    throw new Error(err.message);
  }
}

export async function postChore (chore, token) {
  try {
    const resp = await fetch((ROOT_URL + '/chore'), {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type":"application/json"
      },
      body: JSON.stringify(chore)
    });

    const data = await resp.json();
    return data;
    // if (data.message === 'Chore already exists!') Alert.alert('Chore already exists!');
    // if (data.message.includes('Chore succesfully created')) Alert.alert(`${taskName} task succesfully created!`);

  } catch (err) {
    throw new Error(err.message);
  }
}

/* GROUPS */

export async function postGroup (group, token) {
  try {
    return resp = await fetch((ROOT_URL + '/group'), {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type":"application/json"
      },
      body: JSON.stringify(group)
    }).then((resp => resp.json()))

    // const data = await resp.json();
    // if (data.message === 'Group already exists!') Alert.alert('Group already exists!');
    // if (data.message.includes('Group succesfully created')) Alert.alert(`${groupName} group succesfully created!`);

  } catch (err) {
    throw new Error(err.message);
  }
}

export async function postUserToGroup (groupName, token) {
  try {
    return resp = await fetch((ROOT_URL + '/group/member'), {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type":"application/json"
      },
      body: JSON.stringify({'name': groupName})
    }).then((resp)=> resp.json())



  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getGroups (token) {
  try {
    const resp = await fecth((ROOT_URL + '/groups'), {
      headers: {
        "Authorization": `Bearer ${token}`
    }}).then((resp) => resp.json())

  
  return JSON.parse(resp.message);
   

  } catch (err) {
    throw new Error(err.message);
  }
}