// 6a. Requirement: require datejs outside of the function
require('datejs');

function combineUsers(...args) {
    // 3. Initialize return object
    const combinedObject = {
        users: []
    };

    // 4. Loop through args to isolate each array
    args.forEach(userArray => {
        // 5. Merge arrays using the spread operator
        // We reassign the 'users' property to a new array containing 
        // the existing users plus the new ones unpacked.
        combinedObject.users = [...combinedObject.users, ...userArray];
    });

    // 6b. Get today's date formatted as M/d/yyyy
    // Date.today() is a specific helper provided by the datejs library
    combinedObject.merge_date = Date.today().toString('M/d/yyyy');

    // 7. Return object
    return combinedObject;
}
//********FOR TESTING************************/
// const group1 = ['esteban88', 'coder99'];
// const group2 = ['js_pro', 'flatiron_stud'];

// console.log(combineUsers(group1, group2));

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};