function performTask() {
    // Simulating an asynchronous task
    return new Promise(resolve => {
      setTimeout(() => {
        const randomValue = Math.random();
        console.log('Task completed with value:', randomValue);
        resolve(randomValue);
      }, 1);
    });
  }

  performTask();
  
  function performTasksUntilCondition(condition) {
    return new Promise(async (resolve, reject) => {
      const results = [];
  
      while (true) {
        const result = await performTask();
        results.push(result);
  
        if (condition(result)) {
          resolve(results);
          break;
        }
  
        // Delay before the next iteration
        await new Promise(resolve => setTimeout(resolve, 1));
      }
    });
  }
  
  // Example usage
  const condition = (result) => result < 0.1;
  
  performTasksUntilCondition(condition)
    .then(results => {
      console.log('Tasks completed:', results);
    })
    .catch(error => {
      console.error('Error:', error);
    });