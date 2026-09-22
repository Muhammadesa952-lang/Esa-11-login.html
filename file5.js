// Practice Focus: Asynchronous JavaScript (Promises & Fetch)

async function fetchRandomUser() {
  const url = "https://randomuser.me/api/";

  try {
    console.log("Fetching user data...");
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    const user = data.results[0];

    const userProfile = {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      country: user.location.country,
    };

    console.log("Successfully fetched user:", userProfile);
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
  }
}

// Run the asynchronous function
fetchRandomUser();
