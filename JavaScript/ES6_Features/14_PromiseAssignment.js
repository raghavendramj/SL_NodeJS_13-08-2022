//1. Login to github.com -> console.log -> resolve, reject
//2. Search for repository   -> console.log -> resolve, reject
//3. find your commit -> console.log -> resolve, reject

// Promise + Chaining -> This is your commit

let login = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === "raghav" && password === "raghav@123")
      resolve("Welcome to github.com Logged in successfully!");
    else reject("Incorrect username and password");
  });
};

let repository = (repoName) => {
  return new Promise((resolve, reject) => {
    if (repoName === "simp_node_js")
      resolve("List of contents in the " + repoName);
    else reject("Respository not found~");
  });
};

let checkMyCommits = (commitId) => {
  return new Promise((resolve, reject) => {
    if (commitId === "promise123")
      resolve(
        `files in the commit ${commitId}` +
          ["promise.js", "chaining.js", "express.js"]
      );
    else reject("No commits found for this id");
  });
};

//Chaining the promises!
login("raghav", "raghav@123")
  .then(
    (success) => {
      console.log(success);
      return repository("simp_node_js"); //Next promise
    },
    (error) => console.error(error)
  )
  .then(
    (success) => {
      console.log(success);
      return checkMyCommits("promise123"); //Next promise
    },
    (error) => console.error(error)
  )
  .then(
    (success) => console.log(success),
    (error) => console.error(error)
  );
