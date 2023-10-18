
const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
 const response = await fetch(`${API_URL}/planets`);
 return await response.json();
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) =>{
    return a.flightNumber - b.flightNumber;
  });
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  try{
    return await fetch (`${API_URL}/launches`, {
      method: "post",
      headers: {
          "content-type": "application/json",
      },
      body: JSON.stringify(launch),
    })
  } catch(err){
    return {
      ok: false,
    };
  }
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};