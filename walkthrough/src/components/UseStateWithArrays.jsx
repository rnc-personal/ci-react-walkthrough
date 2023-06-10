import React, { useState } from 'react'

export default function UseStateWithArrays() {
    const [nums, setNums] = useState([1, 2, 3, 4, 5,])
    const addNums = (num) => {
        setNums([...nums, nums.length + 1])
    }

    const subNums = (num) => {
        setNums(
            nums.filter((item, index) => {
                return index !== nums.length - 1
            })
        )
    }

    return (
        <div>
            <button onClick={addNums}>Add Item</button>
            <button onClick={subNums}>Remove Item</button>
            <ul>
                {nums.map(num => <li key={num}>{num}</li>)}
            </ul>
        </div>
    )
}

//
// When the "Remove Item" button is clicked, the subNums function is called.
// Inside the subNums function, a new array is created using the filter method on the nums array. The filter method creates a new array containing only the elements that meet the specified condition.
// The condition is defined using a callback function that takes two parameters: item and index. The callback function checks if the index of each item is not equal to the last index of the nums array (nums.length - 1).
// The purpose of this condition is to exclude the last item from the new array. Essentially, it removes the last item from the nums array.
// The filter method returns the new array without the last item.
// Finally, the setNums function is called with the new array as its argument, updating the state of nums to the new array without the last item.

// General Rules for useState with Arrays:

// 1. an array passed to a function thats sets the value , will overwrite the previous value
// 2. never directly update the state using <array>.pop/.push methods. This is because you are trying to mutate the original array.
// React will not see this as a change in the state. Because the Reference to the original array is the same in memory.
// Which is why we are using the filter method on the array, because it makes a copy of the original array. 
// Then we compare the new array with the original array and remove items where the index of the new array does not match the index of the new array...

//  orignal Array: [1, 2, 3, 4, 5]
// Filter Array: [1, 2, 3, 4, 5, 6,]

// since we have a longer index in the filtered array, 6 would be removed in this case because it is not in the orignal array.

//  use the spread operator to create a new array with all the values from the original array.
//  You don't know what was in the orignal array so spread operator is used to create a new array with all the values from the original array.
//  Which we can then modify use the various pure functions like filter, map, and reduce.